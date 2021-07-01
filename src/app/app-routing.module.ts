import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/auth',pathMatch:'full'},
  {path:'staff/checkin',redirectTo:'/staff/checkin/flight-details',pathMatch:'full'},
  {path:'admin/manage-passenger',redirectTo:'/admin/manage-passenger/view-passenger',pathMatch:'full'},
  { path: 'staff', loadChildren: () => import('./modules/staff/staff.module').then(m => m.StaffModule) }, 
{ path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
