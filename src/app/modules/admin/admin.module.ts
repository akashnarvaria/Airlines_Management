import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { ManagePassengerComponent } from './component/manage-passenger/manage-passenger.component';
import { ManageFlightComponent } from './component/manage-flight/manage-flight.component';
import { PassengerSidebarComponent } from './component/manage-passenger/component/passenger-sidebar/passenger-sidebar.component';
import { ViewPassengerComponent } from './component/manage-passenger/component/view-passenger/view-passenger.component';
import { AddPassengerComponent } from './component/manage-passenger/component/add-passenger/add-passenger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPassengerComponent } from './component/manage-passenger/component/edit-passenger/edit-passenger.component';
import { FlightAncillaryComponent } from './component/manage-flight/component/flight-ancillary/flight-ancillary.component';
import { EditFlightAncillaryComponent } from './component/manage-flight/component/edit-flight-ancillary/edit-flight-ancillary.component';
import { AddFlightAncillaryComponent } from './component/manage-flight/component/add-flight-ancillary/add-flight-ancillary.component';
import { FlightMealComponent } from './component/manage-flight/component/flight-meal/flight-meal.component';
import { EditFlightMealComponent } from './component/manage-flight/component/edit-flight-meal/edit-flight-meal.component';
import { AddFlightMealComponent } from './component/manage-flight/component/add-flight-meal/add-flight-meal.component';
import { ShoppingItemsComponent } from './component/manage-flight/component/shopping-items/shopping-items.component';
import { EditShoppingItemsComponent } from './component/manage-flight/component/edit-shopping-items/edit-shopping-items.component';
import { AddShoppingItemsComponent } from './component/manage-flight/component/add-shopping-items/add-shopping-items.component';


@NgModule({
  declarations: [
    AdminComponent, 
    AdminHeaderComponent, 
    ManagePassengerComponent, 
    ManageFlightComponent, 
    PassengerSidebarComponent, 
    ViewPassengerComponent, 
    AddPassengerComponent, 
    EditPassengerComponent, FlightAncillaryComponent, EditFlightAncillaryComponent, AddFlightAncillaryComponent, FlightMealComponent, EditFlightMealComponent, AddFlightMealComponent, ShoppingItemsComponent, EditShoppingItemsComponent, AddShoppingItemsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
