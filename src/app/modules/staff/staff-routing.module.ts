import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinComponent } from './component/checkin/checkin.component';
import { FlightDetailsComponent } from './component/checkin/flight-details/flight-details.component';
import { InFlightComponent } from './component/in-flight/in-flight.component';
import { StaffComponent } from './staff.component';

const routes: Routes = [
  { path: '', component: StaffComponent,children:[
    { path:'checkin', component:CheckinComponent, children:[
      {path:'flight-details' , component:FlightDetailsComponent}
    ]},
    {path:'in-flight' ,component:InFlightComponent}
  ] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
