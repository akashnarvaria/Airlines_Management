import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddFlightAncillaryComponent } from './component/manage-flight/component/add-flight-ancillary/add-flight-ancillary.component';
import { AddFlightMealComponent } from './component/manage-flight/component/add-flight-meal/add-flight-meal.component';
import { AddShoppingItemsComponent } from './component/manage-flight/component/add-shopping-items/add-shopping-items.component';
import { EditFlightAncillaryComponent } from './component/manage-flight/component/edit-flight-ancillary/edit-flight-ancillary.component';
import { EditFlightMealComponent } from './component/manage-flight/component/edit-flight-meal/edit-flight-meal.component';
import { EditShoppingItemsComponent } from './component/manage-flight/component/edit-shopping-items/edit-shopping-items.component';
import { FlightAncillaryComponent } from './component/manage-flight/component/flight-ancillary/flight-ancillary.component';
import { FlightMealComponent } from './component/manage-flight/component/flight-meal/flight-meal.component';
import { ShoppingItemsComponent } from './component/manage-flight/component/shopping-items/shopping-items.component';
import { ManageFlightComponent } from './component/manage-flight/manage-flight.component';
import { AddPassengerComponent } from './component/manage-passenger/component/add-passenger/add-passenger.component';
import { EditPassengerComponent } from './component/manage-passenger/component/edit-passenger/edit-passenger.component';
import { ViewPassengerComponent } from './component/manage-passenger/component/view-passenger/view-passenger.component';
import { ManagePassengerComponent } from './component/manage-passenger/manage-passenger.component';

const routes: Routes = [
  { path: '', component: AdminComponent,children:[
    {path:'manage-passenger',component:ManagePassengerComponent,children:[
      {path:'view-passenger', component:ViewPassengerComponent},
      {path:'add-passenger',component:AddPassengerComponent},
      {path:'edit-passenger/:pid',component:EditPassengerComponent}
    ]},
    {path:'manage-flight',component:ManageFlightComponent},
    {path:'flight-ancillary/:fid',component:FlightAncillaryComponent},
    {path:'edit-ancillary/:fid/:aid',component:EditFlightAncillaryComponent},
    {path:'add-ancillary/:fid',component:AddFlightAncillaryComponent},
    {path:'flight-meal/:fid',component:FlightMealComponent},
    {path:'edit-meal/:fid/:mid',component:EditFlightMealComponent},
    {path:'add-meal/:fid',component:AddFlightMealComponent},
    {path:'shopping-items/:fid',component:ShoppingItemsComponent},
    {path:'edit-shopping-items/:fid/:itemid',component:EditShoppingItemsComponent},
    {path:'add-shopping-items/:fid',component:AddShoppingItemsComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
