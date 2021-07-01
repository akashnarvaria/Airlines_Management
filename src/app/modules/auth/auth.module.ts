import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [AuthComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports:[AuthComponent, ForgetPasswordComponent],
  providers: [],
})

export class AuthModule { }
