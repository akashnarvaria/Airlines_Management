import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-edit-flight-ancillary',
  templateUrl: './edit-flight-ancillary.component.html',
  styleUrls: ['./edit-flight-ancillary.component.scss']
})
export class EditFlightAncillaryComponent implements OnInit {
updateAncillary=new FormGroup({
'service':new FormControl('')
})
flightDetails:any=[];
flightAncillaryDetail:any=[];
index:number;
ancillaryIndex:number;
input:string='';
passengerDetails:any=[];
  constructor(private commonService:CommonService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
      this.getFlightDetails();
    
  }

  getFlightDetails(){
    
    this.commonService.getFlightDetails().subscribe(data=>{
      this.flightDetails=data;

      //getting index
      this.route.params.subscribe(data=>{
      this.index=this.getIndex(+data.fid);
      this.ancillaryIndex=+data.aid;
    });

    //geting Ancillary Details
    //console.log(this.index);
    //console.log(this.getFlightDetails[this.index]);
      this.flightAncillaryDetail=this.flightDetails[this.index].ancillary.services[this.ancillaryIndex];

      //filling form details
      this.updateAncillary=new FormGroup({
        'service':new FormControl(this.flightAncillaryDetail.service)
      });
      this.getPassengerDetails();
    });
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

  getPassengerDetails(){
    
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;
    });
  }

  updatePassengerDetail(id:number){
    
    for(let i=0;i<this.passengerDetails.length;i++){
      console.log(this.passengerDetails.length);
      if(this.flightDetails[this.index].flightid==this.passengerDetails[i].flightid){
        
        if(this.passengerDetails[i].ancillary.serviceRequired){
          for(let j=0;j<this.passengerDetails[i].ancillary.services.length;j++){
            if(this.passengerDetails[i].ancillary.services[j].id==id){
              this.passengerDetails[i].ancillary.services[j].service=this.updateAncillary.get('service').value;
              
              this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe();
            }
          }
        }
      }
    }
  }

  editAncillary(){
    this.flightDetails[this.index].ancillary.services[this.ancillaryIndex].service=this.updateAncillary.get('service').value;
    this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
      this.updatePassengerDetail(this.flightAncillaryDetail.id);
      alert("Service Edited Successfully");
      this.router.navigate(['../../../flight-ancillary/'+this.flightDetails[this.index].flightid],{relativeTo:this.route});
    });
  }
}
