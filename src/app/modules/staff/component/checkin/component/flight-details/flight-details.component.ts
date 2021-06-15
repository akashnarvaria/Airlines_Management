import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../../../shared/service/common.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
flightDetails:any=[];
flightDetail:any=[];
input:string='';
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
      this.getFlightDetails();
    
  }

  getFlightDetails(){
    
    this.commonService.getFlightDetails().subscribe(data=>{
      this.flightDetails=data;
      this.flightDetail=data;
    });
  }

  applyFilter(){
      let flightDetails:any=[];
      flightDetails=this.flightDetails;
      if(this.input!=''){
        this.flightDetail=[];
        for(let i=0;i<flightDetails.length;i++){
          if(flightDetails[i].arrival==this.input){
            this.flightDetail.push(flightDetails[i]);
          }
        }

      }
      else{
        this.flightDetail=this.flightDetails;
      }
  }
}
