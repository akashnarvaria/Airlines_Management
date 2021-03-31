import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'staff', loadChildren: () => import('./modules/staff/staff.module').then(m => m.StaffModule) }, { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }, { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
