import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-in-flight',
  templateUrl: './in-flight.component.html',
  styleUrls: ['./in-flight.component.scss']
})
export class InFlightComponent implements OnInit {
  passengerDetails:any=[];
  isLoading=false
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getPassengerDetails();
    console.log(this.passengerDetails);
  }

  getPassengerDetails(){
    this.isLoading=true;
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;
      this.isLoading=false;
    });

  }

}
