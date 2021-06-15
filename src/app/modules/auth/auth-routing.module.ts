import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { AuthGuardAuth } from './service/auth.guard.auth';

const routes: Routes = [{ path: '', component: AuthComponent},
  {path:'forget-password',component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
