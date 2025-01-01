import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignInFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SignInFormComponent
  ]
})
export class AuthModule { }
