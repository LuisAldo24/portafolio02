const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "aldo.olivas97@gmail.com",
        pass: "Undertake2497"
    }
});

exports.WelcomeMail = functions.firestore.document("portafolio/{id}").onCreate(
    (snap, context) => {
        const email = snap.data().email;
        const name = snap.data().name;
        const subject = snap.data().subject;
        const message = snap.data().message;

        return sendWelcomeMail(email,name, subject, message);
});

//aux functions
function sendWelcomeMail(email,name){
    return transport.sendMail({
        
        from: "Bliss <aldo.olivas24@gmail.com>",
        to: email,
        subject: "mensaje contacto de portafolio",
        html: `
            <h1> hola ${name} </h1>
            <p> gracias por mandar correo </p>
        `

    })
    .then(r => r)
    .catch(e => e);
}

