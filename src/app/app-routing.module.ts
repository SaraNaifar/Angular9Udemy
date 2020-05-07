import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SigninComponent } from './authetication/signin/signin.component';

const routes : Routes =[
   {path : 'home', component: HomeComponent},
   {path:'admin/dashboard', component: DashboardComponent},
   {path:'login', component: SigninComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
