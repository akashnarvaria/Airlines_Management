import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../../../../shared/service/common.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
passengerDetails:any=[];
passengerDetail:any=[];
input:string='';
checkinFilter='';
wheelchair='';
infants='';
flightDetails:any=[];
flightDetail:any=[];
checkin:boolean;
change_Seat=false;
pId:number;
  constructor(private commonService:CommonService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPassengerDetails();
    console.log(this.passengerDetails);
    this.commonService.getFlightDetails().subscribe(data=>{
      this.flightDetails=data;
    });
  }

  getPassengerDetails(){
    
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;
      this.passengerDetail=data;
    });

  }

  applyFilter(){
    let passengerDetails:any=[];
    passengerDetails=this.passengerDetails;
    if(this.input!=''){
      this.passengerDetail=[];
      for(let i=0;i<passengerDetails.length;i++){
        if(passengerDetails[i].name==this.input){
          this.passengerDetail.push(passengerDetails[i]);
        }
      }

    }
    else{
      this.passengerDetail=this.passengerDetails;
    }
  }

  applyFilterByCheckin(){
    let passengerDetails:any=[];
    passengerDetails=this.passengerDetails;
    if(this.checkinFilter!=''){
      this.passengerDetail=[];
      for(let i=0;i<passengerDetails.length;i++){
        if(passengerDetails[i].checkin==(this.checkinFilter==='true')){
          this.passengerDetail.push(passengerDetails[i]);
        }
      }

    }
    else{
      this.passengerDetail=this.passengerDetails;
    }
  }

  applyFilterByWheelchair(){
    let passengerDetails:any=[];
    passengerDetails=this.passengerDetails;
    if(this.wheelchair!=''){
      this.passengerDetail=[];
      for(let i=0;i<passengerDetails.length;i++){
        if(passengerDetails[i].wheelchair==(this.wheelchair==='true')){
          this.passengerDetail.push(passengerDetails[i]);
        }
      }

    }
    else{
      this.passengerDetail=this.passengerDetails;
    }
  }

  applyFilterByInfants(){
    let passengerDetails:any=[];
    passengerDetails=this.passengerDetails;
    if(this.infants!=''){
      this.passengerDetail=[];
      for(let i=0;i<passengerDetails.length;i++){
        if(passengerDetails[i].infants==(this.infants==='true')){
          this.passengerDetail.push(passengerDetails[i]);
        }
      }

    }
    else{
      this.passengerDetail=this.passengerDetails;
    }
  }
  
  passengerCheckinInPassenger(flightId:number,seatNo:string){
    for(let i=0;i<this.passengerDetail.length;i++){
      if(this.passengerDetail[i].flightid==flightId && this.passengerDetail[i].seatNo==seatNo){
        console.log("inside if");
        console.log(this.passengerDetail[i].checkin);
        this.passengerDetail[i].checkin=this.checkin;
      }
    }
    this.commonService.passengerCheckinInPassenger(this.passengerDetail).subscribe();
  }

  passengerCheckinInFlight(flightId:number,seatNo:string){
    let flightDetails=this.flightDetails;
    for(let i=0;i<flightDetails.length;i++){
      if(flightDetails[i].flightid==flightId){
        for(let j=0;j<flightDetails[i].seats.length;j++){
          if(flightDetails[i].seats[j].sno==seatNo){
            if(flightDetails[i].seats[j].checkin){
              flightDetails[i].seats[j].checkin=false;
              this.checkin=false;
              break;
            }
            else{
              flightDetails[i].seats[j].checkin=true;
              this.checkin=true;
              break;
            }
        }
      }
      }
    }
    this.commonService.passengerCheckinInFlight(flightDetails).subscribe();
    this.passengerCheckinInPassenger(flightId,seatNo);
  }

  changeSeat(pId:number,flightId:number){
    this.pId=pId;
    for(let i=0;i<this.flightDetails.length;i++){
      if(this.flightDetails[i].flightid==flightId){
        this.flightDetail=this.flightDetails[i].seats;
        console.log(i);
        console.log(this.flightDetail);
        this.change_Seat=true;
      }
    }
  }
  goBack(){
    this.change_Seat=false;
  }

  changeSeatInPassenger(seatNo:string){
    for(let i=0;i<this.passengerDetail.length;i++){
      if(this.passengerDetail[i].id==this.pId){
       let isAvailable= this.changeSeatInFlight(
          this.passengerDetail[i].flightid,
          this.passengerDetail[i].seatNo,
          seatNo,
          this.passengerDetail[i].infants,
          this.passengerDetail[i].wheelchair
        );
        console.log(isAvailable);
        if(isAvailable){
          this.passengerDetail[i].seatNo=seatNo;
          this.passengerDetail[i].checkin=false;
        }
        
      }
    }
    this.commonService.passengerCheckinInPassenger(this.passengerDetail).subscribe();
  }
  
  changeSeatInFlight(flightId:number,oldSeat:string,newSeat:string,infants:boolean,wheelchair:boolean){
    let flightDetails=this.flightDetails;
    let isAvailable=false;
    for(let k=0;k<this.flightDetail.length;k++){
      if(this.flightDetail[k].sno==newSeat){
        if(this.flightDetail[k].available){
          isAvailable=true;
          for(let i=0;i<flightDetails.length;i++){
            if(flightDetails[i].flightid==flightId){
              for(let j=0;j<flightDetails[i].seats.length;j++){
                if(flightDetails[i].seats[j].sno==oldSeat ){
                  flightDetails[i].seats[j].checkin=false;
                  flightDetails[i].seats[j].booked=false;
                  flightDetails[i].seats[j].available=true;
                  flightDetails[i].seats[j].infants=false;
                  flightDetails[i].seats[j].wheelchair=false;
              }
              if(flightDetails[i].seats[j].sno==newSeat ){
                flightDetails[i].seats[j].booked=true;
                flightDetails[i].seats[j].available=false;
                flightDetails[i].seats[j].infants=infants;
                flightDetails[i].seats[j].wheelchair=wheelchair;
            }
            }
            break;
            }
          }
          break;
        }
      }
    }
    
    this.commonService.passengerCheckinInFlight(flightDetails).subscribe();
    return isAvailable;
  }
  
        
}
