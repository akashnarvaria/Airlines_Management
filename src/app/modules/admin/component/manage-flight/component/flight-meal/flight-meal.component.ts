import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-flight-meal',
  templateUrl: './flight-meal.component.html',
  styleUrls: ['./flight-meal.component.scss']
})
export class FlightMealComponent implements OnInit {
  flightDetails:any=[];
  flightMealDetail:any=[];
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
        this.flightMealDetail=this.flightDetails[this.index].ancillary.meal;
      });
    }
  
    applyFilter(){
        let flightDetails:any=[];
        flightDetails=this.flightDetails;
        if(this.input!=''){
          this.flightMealDetail=[];
          for(let i=0;i<flightDetails[this.index].ancillary.meal.length;i++){
            if(flightDetails[this.index].ancillary.meal[i].mealName.toUpperCase()==this.input.toUpperCase()){
              this.flightMealDetail.push(flightDetails[this.index].ancillary.meal[i]);
            }
          }
  
        }
        else{
          this.flightMealDetail=flightDetails[this.index].ancillary.meal;
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
      let newMeal:any=[];
      for(let i=0;i<this.flightDetails[this.index].ancillary.meal.length;i++){
        if(i!=index){
          newMeal.push(this.flightDetails[this.index].ancillary.meal[i]);
        }
      }
      this.flightDetails[this.index].ancillary.meal=newMeal;
      this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
        this.getFlightDetails();
        alert('Deleted Successfully');
      });
      
    }
}
