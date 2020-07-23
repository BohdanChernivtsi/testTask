import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginViewComponent } from './containers/login-view/login-view.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [LoginViewComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
