import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { FooterComponent } from './site-layout/footer/footer.component';
import { CheckinComponent } from './component/checkin/checkin.component';
import { HeaderComponent } from './site-layout/header/header.component';
import { SidebarComponent } from './component/checkin/sidebar/sidebar.component';
import { InFlightComponent } from './component/in-flight/in-flight.component';


@NgModule({
  declarations: [StaffComponent, HeaderComponent, FooterComponent, CheckinComponent, SidebarComponent, InFlightComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
