import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './shared/head/head.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ServicesComponent } from './pages/services/services.component';
import { SkillComponent } from './pages/skill/skill.component';

const routes: Routes = [
  {path: 'head', component:HeadComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'resume', component:ResumeComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'skill', component:SkillComponent},
  {path: '**', pathMatch: 'full', redirectTo:'head'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
