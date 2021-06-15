import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-in-flight-shop',
  templateUrl: './in-flight-shop.component.html',
  styleUrls: ['./in-flight-shop.component.scss']
})
export class InFlightShopComponent implements OnInit {
isLoading=false;
passengerDetails:any=[];
index:number;
passengerShopDetail:any=[];
editMode=false;

  constructor(private commonService:CommonService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPassengerShopDetails();
  }

  getPassengerShopDetails(){
    this.isLoading=true;
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;

      //getting index
      this.route.params.subscribe(data=>{
        this.index=this.getIndex(+data.pid);
      });
      //getting passenger Ancillary details
        this.passengerShopDetail=this.passengerDetails[this.index].inflightshop;
        console.log(this.passengerShopDetail);
        this.isLoading=false;
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
  editModeFunc(){
    this.editMode=true;
  }

  editItem(form:NgForm,index:number){
    this.passengerDetails[this.index].inflightshop.items[index].quantity=form.value.quantity;
    this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe();
    alert("Successfully Edited");
    this.editMode=false;
  }

  removeItem(index:number){
    
    let items:any=[];
    for(let i=0;i<this.passengerDetails[this.index].inflightshop.items.length;i++){
      if(i!=index){
        items.push(this.passengerDetails[this.index].inflightshop.items[i]);
      }
    }
    if(items.length==0){
      this.passengerDetails[this.index].inflightshop.enabled=false;
    }
    this.passengerDetails[this.index].inflightshop.items=items;
    
    this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe();
    alert("Successfully Removed");
  }
}
