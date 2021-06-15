import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-change-meal',
  templateUrl: './change-meal.component.html',
  styleUrls: ['./change-meal.component.scss']
})
export class ChangeMealComponent implements OnInit {
  passengerDetails:any=[];
  index:number;
  passengerMealDetail:any=[];
  mealId:any=[];
  input:string;
  flightDetails:any=[];
  flightIndex:number;
  flightMealDetails:any=[];
  meal=false;
  constructor(private commonService:CommonService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getPassengerMealDetails();
    
  }

  getFlightDetails(){
    this.commonService.getFlightDetails().subscribe(data=>{
      this.flightDetails=data;

      //getting flight index
      this.flightIndex=this.getFlightIndex(this.passengerDetails[this.index].flightid);

      //getting flight meal
      console.log(this.flightIndex);
      this.flightMealDetails=this.flightDetails[this.flightIndex].ancillary.meal;
      
    });
  }

  getPassengerMealDetails(){
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;

      //getting index
      this.route.params.subscribe(data=>{
        this.index=this.getIndex(+data.pid);
      });
      //getting passenger meal details
      if(this.passengerDetails[this.index].ancillary.mealRequired){
        this.passengerMealDetail=this.passengerDetails[this.index].ancillary.meal;
        console.log(this.passengerMealDetail);
      }

      //getting flight details
      this.getFlightDetails();
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


  getIndex(pId:number){
    for(let i=0;i<this.passengerDetails.length;i++){
      if(this.passengerDetails[i].id==pId){
        return i;
      }
    }
    return -1;
  }

  getMealIndex(id:number){
    for(let i=0;i<this.flightMealDetails.length;i++){
      if(this.flightMealDetails[i].id==id){
        return i;
      }
    }
    return -1;
  }

  changeMeal(form:NgForm){
    let meal=[];
    let mealIndex:number;
    let passengerDetail:any=this.passengerDetails;
    
    for(let i=0;i<this.mealId.length;i++){
      mealIndex=this.getMealIndex(this.mealId[i]);
      if(mealIndex!=-1){
        let obj={
          "id":this.mealId[i],
          "mealName":this.flightMealDetails[mealIndex].mealName
        };
        meal.push(obj);
      }
      
      
    }
    if(meal.length>0){
      this.meal=true;
      this.passengerDetails[this.index].ancillary.mealRequired=true;
    }
    else{
      this.passengerDetails[this.index].ancillary.mealRequired=false;
    }
    
    passengerDetail[this.index].ancillary.meal=meal;
    console.log(passengerDetail);
    this.commonService.passengerCheckinInPassenger(passengerDetail).subscribe();
    this.mealChangeFlight( passengerDetail[this.index].flightid, passengerDetail[this.index].seatNo);
    window.alert("Meal successfully edited");
    this.router.navigate(['staff/ancillary-details/'+passengerDetail[this.index].id]);
  }

  mealChangeFlight(flightId:number,seatNo:string){
    let flightDetails=this.flightDetails;
    for(let i=0;i<flightDetails.length;i++){
      if(flightDetails[i].flightid==flightId){
        for(let j=0;j<flightDetails[i].seats.length;j++){
          if(flightDetails[i].seats[j].sno==seatNo){
            flightDetails[i].seats[j].meal=this.meal;
        }
      }
      }
    }
    this.commonService.passengerCheckinInFlight(flightDetails).subscribe();
  }

  isInclude(meal:string){
    for(let i=0;i<this.passengerMealDetail.length;i++){
      if(this.passengerMealDetail[i].mealName.toUpperCase()==meal.toUpperCase()){
        return true;
        
      }
    }
    return false;
  }

}
