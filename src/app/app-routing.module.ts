import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthGaurdService } from './auth-gaurd.service';
const routes: Routes = [
  { 
    path: 's1', 
    loadChildren: () => import('./pages/s1.module').then(m => m.S1Module) ,
    
  },
  { path: 'AboutUs', component: AboutUsComponent , canActivate: [AuthGaurdService] },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
