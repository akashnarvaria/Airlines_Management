import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-flight-ancillary',
  templateUrl: './flight-ancillary.component.html',
  styleUrls: ['./flight-ancillary.component.scss']
})
export class FlightAncillaryComponent implements OnInit {
  flightDetails:any=[];
  flightAncillaryDetail:any=[];
  index:number;
  input:string='';
    constructor(private commonService:CommonService,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
        this.getFlightDetails();
      
    }
  
    getFlightDetails(){
      
      this.commonService.getFlightDetails().subscribe(data=>{
        this.flightDetails=data;

        //getting index
        this.route.params.subscribe(data=>{
        this.index=this.getIndex(+data.fid);
      });

      //geting Ancillary Details
      //console.log(this.index);
      //console.log(this.getFlightDetails[this.index]);
        this.flightAncillaryDetail=this.flightDetails[this.index].ancillary.services;
      });
    }
  
    applyFilter(){
        let flightDetails:any=[];
        flightDetails=this.flightDetails;
        if(this.input!=''){
          this.flightAncillaryDetail=[];
          for(let i=0;i<flightDetails[this.index].ancillary.services.length;i++){
            if(flightDetails[this.index].ancillary.services[i].service.toUpperCase()==this.input.toUpperCase()){
              this.flightAncillaryDetail.push(flightDetails[this.index].ancillary.services[i]);
            }
          }
  
        }
        else{
          this.flightAncillaryDetail=flightDetails[this.index].ancillary.services;
        }
    }

    getIndex(fId:number){
      console.log(fId);
      for(let i=0;i<this.flightDetails.length;i++){
        if(this.flightDetails[i].flightid==fId){
          return i;
        }
      }
      return -1;
    }

    onDelete(index:number){
      let newAncillary:any=[];
      for(let i=0;i<this.flightDetails[this.index].ancillary.services.length;i++){
        if(i!=index){
          newAncillary.push(this.flightDetails[this.index].ancillary.services[i]);
        }
      }
      this.flightDetails[this.index].ancillary.services=newAncillary;
      this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
        this.getFlightDetails();
        alert('Deleted Successfully');
      });
      
    }
}
