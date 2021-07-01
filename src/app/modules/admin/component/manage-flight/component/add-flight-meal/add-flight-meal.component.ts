import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-add-flight-meal',
  templateUrl: './add-flight-meal.component.html',
  styleUrls: ['./add-flight-meal.component.scss']
})
export class AddFlightMealComponent implements OnInit {
  addMeal=new FormGroup({
    'mealName':new FormControl(''),
    'price':new FormControl('')
    })
    flightDetails:any=[];
    flightMealDetail:any=[];
    index:number;
    input:string='';
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
        });
    
        //geting Ancillary Details
        //console.log(this.index);
        //console.log(this.getFlightDetails[this.index]);
          this.flightMealDetail=this.flightDetails[this.index].ancillary.meal;
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
    
      addMealDetails(){
        let meal={
          "id":this.flightMealDetail.length+1,
          "mealName":this.addMeal.get('mealName').value,
          "price":this.addMeal.get('price').value
      }
        this.flightDetails[this.index].ancillary.meal.push(meal);
        this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
          alert("Meal Added Successfully");
          this.router.navigate(['../../flight-meal/'+this.flightDetails[this.index].flightid],{relativeTo:this.route})
        });
      }
}
