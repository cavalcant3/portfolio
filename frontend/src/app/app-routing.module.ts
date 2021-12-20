import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { ExperienceComponent } from './views/experience/experience.component';
import { HomeComponent } from './views/home/home.component';
import { SchoolComponent } from './views/school/school.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent

},{
  path: "experience",
  component: ExperienceComponent
},{
  path: "school",
  component: SchoolComponent
},{
  path: "contact",
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
