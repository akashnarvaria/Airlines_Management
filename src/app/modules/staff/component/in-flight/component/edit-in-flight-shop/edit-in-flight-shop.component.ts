import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-edit-in-flight-shop',
  templateUrl: './edit-in-flight-shop.component.html',
  styleUrls: ['./edit-in-flight-shop.component.scss']
})
export class EditInFlightShopComponent implements OnInit {
  isLoading=false;
  passengerDetails:any=[];
  index:number;
  flightIndex:number;
  passengerShopDetail:any=[];
  flightDetails:any=[];
  flightShopDetails:any=[];
  
    constructor(private commonService:CommonService,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getPassengerShopDetails();
    }

    getFlightShopDetails(){
      this.commonService.getFlightDetails().subscribe(data=>{
        this.flightDetails=data;
        console.log(this.passengerDetails[this.index].flightid);
        console.log(this.index);
        this.flightIndex=this.getFlightIndex(this.passengerDetails[this.index].flightid);
        this.flightShopDetails=this.flightDetails[this.flightIndex].shopItems;
        console.log(this.flightShopDetails);
      });
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
          this.getFlightShopDetails();
      });
    }
  
    getIndex(pid:number){
      for(let i=0;i<this.passengerDetails.length;i++){
        if(this.passengerDetails[i].id==pid){
          return i;
        }
      }
      return -1;
    }

    getFlightIndex(fid:number){
      for(let i=0;i<this.flightDetails.length;i++){
        if(this.flightDetails[i].flightid==fid){
          return i;
        }
      }
      return -1;
    }

    addItem(form:NgForm,index:number){
      let itemId=this.flightShopDetails[index].id;
      let itemPresent=false;
      if(this.passengerDetails[this.index].inflightshop.enabled){
        for(let i=0;i<this.passengerShopDetail.items.length;i++){
          if(this.passengerShopDetail.items[i].id==itemId){
            itemPresent=true;
            console.log
            this.passengerDetails[this.index].inflightshop.items[i].quantity+=form.value.quantity;
            this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe();
            alert("Successfully Added");
            break;
          }
        }
        if(!itemPresent){
          let items:any=[];
          for(let i=0;i<this.passengerDetails[this.index].inflightshop.items.length;i++){
              items.push(this.passengerDetails[this.index].inflightshop.items[i]);
          }
          let obj={
            "id":this.flightShopDetails[index].id,
            "itemLink":this.flightShopDetails[index].itemLink,
            "item":this.flightShopDetails[index].item,
            "price":this.flightShopDetails[index].price,
            "quantity":form.value.quantity
          };
          items.push(obj);
          this.passengerDetails[this.index].inflightshop.items=items;
          this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe();
          alert("Successfully Added");
        }
      }else{
        let items:any=[];
        
        let obj={
          "id":this.flightShopDetails[index].id,
          "itemLink":this.flightShopDetails[index].itemLink,
          "item":this.flightShopDetails[index].item,
          "price":this.flightShopDetails[index].price,
          "quantity":form.value.quantity
        };
        items.push(obj);
        this.passengerDetails[this.index].inflightshop["items"]=items;
        this.passengerDetails[this.index].inflightshop.enabled=true;
        this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe();
        alert("Successfully Added");
      }
      
      

    }
}
