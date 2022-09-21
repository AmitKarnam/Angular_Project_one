import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './services/auth-guard.guard'
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { OtpLoginFormComponent } from './components/otp-login-form/otp-login-form.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects', loadChildren: () => import('./projects-module/projects-module.module').then(m => m.ProjectsModuleModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'signup',
    component: SignupFormComponent,
  },
  {
    path: 'phoneLogin',
    component: OtpLoginFormComponent,
  },
  {
    path: 'phoneNumber',
    component: PhoneNumberComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }