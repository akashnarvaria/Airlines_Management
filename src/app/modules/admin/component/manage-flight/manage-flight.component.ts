import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-manage-flight',
  templateUrl: './manage-flight.component.html',
  styleUrls: ['./manage-flight.component.scss']
})
export class ManageFlightComponent implements OnInit {
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
            if(flightDetails[i].name.toUpperCase()==this.input.toUpperCase()){
              this.flightDetail.push(flightDetails[i]);
            }
          }
  
        }
        else{
          this.flightDetail=this.flightDetails;
        }
    }
}
