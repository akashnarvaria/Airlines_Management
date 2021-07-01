import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardStaff } from '../auth/service/auth.guard.staff';
import { CheckinComponent } from './component/checkin/checkin.component';
import { FlightDetailsComponent } from './component/checkin/component/flight-details/flight-details.component';
import { FlightSeatDetailsComponent } from './component/checkin/component/flight-seat-details/flight-seat-details.component';
import { InFlightComponent } from './component/in-flight/in-flight.component';
import { StaffComponent } from './staff.component';
import { PassengerDetailsComponent } from 'src/app/modules/staff/component/checkin/component/passenger-details/passenger-details.component';
import { ChangeMealComponent } from './component/in-flight/component/change-meal/change-meal.component';
import { AncilleryComponent } from './component/in-flight/component/ancillery/ancillery.component';
import { AddAncillaryComponent } from './component/in-flight/component/add-ancillary/add-ancillary.component';
import { InFlightShopComponent } from './component/in-flight/component/in-flight-shop/in-flight-shop.component';
import { EditInFlightShopComponent } from './component/in-flight/component/edit-in-flight-shop/edit-in-flight-shop.component';

const routes: Routes = [
  
  { path: '', component: StaffComponent,canActivate:[AuthGuardStaff],children:[
    
    { path:'checkin', component:CheckinComponent, children:[
      {path:'flight-details' , component:FlightDetailsComponent},
      {path:'flight-seat-details/:id', component:FlightSeatDetailsComponent},
      {path:'passenger-details',component:PassengerDetailsComponent}
    ]},
    {path:'in-flight' ,component:InFlightComponent},
    {path:'change-meal/:pid' ,component:ChangeMealComponent},
    {path:'ancillary-details/:pid', component:AncilleryComponent},
    {path:'add-ancillary/:pid',component:AddAncillaryComponent},
    {path:'in-flight-shop/:pid',component:InFlightShopComponent},
    {path:'edit-in-flight-shop/:pid',component:EditInFlightShopComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
