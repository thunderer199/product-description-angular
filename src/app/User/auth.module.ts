import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {LoginComponent} from './login/login-component.component';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import {RegisterComponent} from './register/register-component.component';

const heroesRoutes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [AuthService]
})
export class AuthModule {
}
