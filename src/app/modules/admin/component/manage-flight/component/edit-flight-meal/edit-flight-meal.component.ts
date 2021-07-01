import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-edit-flight-meal',
  templateUrl: './edit-flight-meal.component.html',
  styleUrls: ['./edit-flight-meal.component.scss']
})
export class EditFlightMealComponent implements OnInit {
  updateMeal=new FormGroup({
    'mealName':new FormControl(''),
    'price':new FormControl('')
    })
    flightDetails:any=[];
    flightMealDetail:any=[];
    index:number;
    mealIndex:number;
    input:string='';
    passengerDetails:any=[];
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
          this.mealIndex=+data.mid;
        });
    
        //geting Ancillary Details
        //console.log(this.index);
        //console.log(this.getFlightDetails[this.index]);
          this.flightMealDetail=this.flightDetails[this.index].ancillary.meal[this.mealIndex];
    
          //filling form details
          this.updateMeal=new FormGroup({
            'mealName':new FormControl(this.flightMealDetail.mealName),
            'price':new FormControl(this.flightMealDetail.price)
          });
        });
        this.getPassengerDetails();
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
            
            if(this.passengerDetails[i].ancillary.mealRequired){
              for(let j=0;j<this.passengerDetails[i].ancillary.meal.length;j++){
                console.log(this.passengerDetails[i].ancillary.meal[j].id);
                if(this.passengerDetails[i].ancillary.meal[j].id==id){
                  this.passengerDetails[i].ancillary.meal[j].mealName=this.updateMeal.get('mealName').value;
                  
                  this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe();
                }
              }
            }
          }
        }
      }
    
      editMeal(){
        this.flightDetails[this.index].ancillary.meal[this.mealIndex].mealName=this.updateMeal.get('mealName').value;
        this.flightDetails[this.index].ancillary.meal[this.mealIndex].price=this.updateMeal.get('price').value;
        this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
          this.updatePassengerDetail(this.flightMealDetail.id);   
          alert("Meal Edited Successfully");
        });
      }
}
