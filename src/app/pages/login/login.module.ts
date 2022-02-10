import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormModule } from '../../modules/login-form/login-form.module'
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule,
    LoginFormModule
  ]
})
export class LoginModule { }
