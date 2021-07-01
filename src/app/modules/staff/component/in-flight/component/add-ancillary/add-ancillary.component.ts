import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-add-ancillary',
  templateUrl: './add-ancillary.component.html',
  styleUrls: ['./add-ancillary.component.scss']
})
export class AddAncillaryComponent implements OnInit {
  passengerDetails:any=[];
  passengerDetail:any=[];
  flightDetails:any=[];
  flightAncillaryDetails:any=[];
  flightIndex:number;
  index:number;
  serviceId:any=[];
  isLoading=false;
  constructor(private commonService:CommonService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getPassengerAncillaryDetails();
    
  }

  getFlightDetails(){
    this.commonService.getFlightDetails().subscribe(data=>{
      this.flightDetails=data;

      //getting flight index
      this.flightIndex=this.getFlightIndex(this.passengerDetails[this.index].flightid);

      //getting flight meal
      this.flightAncillaryDetails=this.flightDetails[this.flightIndex].ancillary.services;
    });
  }

  getFlightIndex(fId:number){
    for(let i=0;i<this.flightDetails.length;i++){
      if(this.flightDetails[i].flightid==fId){
        return i;
      }
    }
    return -1;
  }

  getServiceIndex(id:number){
    for(let i=0;i<this.flightAncillaryDetails.length;i++){
      if(this.flightAncillaryDetails[i].id==id){
        return i;
      }
    }
    return -1;
  }

  getPassengerAncillaryDetails(){
    this.isLoading=true;
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;

      //getting index
      this.route.params.subscribe(data=>{
        this.index=this.getIndex(+data.pid);
      });
      //getting passenger Ancillary details
        this.passengerDetail=this.passengerDetails[this.index].ancillary;
        this.isLoading=false;

        //getting flight details
        this.getFlightDetails();
    });
  }


  getIndex(pId:number){
    for(let i=0;i<this.passengerDetails.length;i++){
      if(this.passengerDetails[i].id==pId){
        return i;
      }
    }
    return -1;
  }

  changeAncillary(form:NgForm){
    let ancillary:any=[];
    let serviceIndex:number;
    let passengerDetail:any=this.passengerDetails;

    for(let i=0;i<this.serviceId.length;i++){
      serviceIndex=this.getServiceIndex(this.serviceId[i]);
      if(serviceIndex!=-1){
        let obj={
          "id":this.serviceId[i],
          "service":this.flightAncillaryDetails[serviceIndex].service
        };
        ancillary.push(obj);
      }
    }
    if(ancillary.length>0){
      this.passengerDetails[this.index].ancillary.serviceRequired=true;
    }
    else{
      this.passengerDetails[this.index].ancillary.serviceRequired=false;
    }
    passengerDetail[this.index].ancillary.services=ancillary;
    this.commonService.passengerCheckinInPassenger(passengerDetail).subscribe();
    window.alert("Ancillary successfully edited");
    this.router.navigate(['staff/ancillary-details/'+passengerDetail[this.index].id]);
  }

  isInclude(ancillaryValue:string){
    if(this.passengerDetail.serviceRequired){
      for(let i=0;i<this.passengerDetail.services.length;i++){
        if(this.passengerDetail.services[i].service==ancillaryValue){
          return true;
        }
       }
    }
     
    return false;
  }

}
