import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { CheckinComponent } from './component/checkin/checkin.component';
import { HeaderComponent } from './site-layout/header/header.component';
import { SidebarComponent } from './component/checkin/component/sidebar/sidebar.component';
import { InFlightComponent } from './component/in-flight/in-flight.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChangeMealComponent } from './component/in-flight/component/change-meal/change-meal.component';
import { AncilleryComponent } from './component/in-flight/component/ancillery/ancillery.component';
import { AddAncillaryComponent } from './component/in-flight/component/add-ancillary/add-ancillary.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InFlightShopComponent } from './component/in-flight/component/in-flight-shop/in-flight-shop.component';
import { EditInFlightShopComponent } from './component/in-flight/component/edit-in-flight-shop/edit-in-flight-shop.component';
import { FlightDetailsComponent } from './component/checkin/component/flight-details/flight-details.component';
import { FlightSeatDetailsComponent } from './component/checkin/component/flight-seat-details/flight-seat-details.component';
import { PassengerDetailsComponent } from './component/checkin/component/passenger-details/passenger-details.component';
import { MyBtnComponent } from '../../shared/customMaterialComponent/my-btn.component'
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    StaffComponent, 
    FlightDetailsComponent, 
    FlightSeatDetailsComponent, 
    PassengerDetailsComponent,
    HeaderComponent, 
    CheckinComponent, 
    SidebarComponent, 
    MyBtnComponent,
    InFlightComponent, ChangeMealComponent, AncilleryComponent, AddAncillaryComponent, InFlightShopComponent, EditInFlightShopComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    StaffComponent, 
    FlightDetailsComponent, 
    FlightSeatDetailsComponent, 
    PassengerDetailsComponent,
    HeaderComponent,
    CheckinComponent, 
    SidebarComponent, 
    InFlightComponent],
  providers: []
})
export class StaffModule { }
