import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { S1Component } from './s1.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const routes: Routes = [
  { path: '', component: S1Component },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class S1RoutingModule { }
