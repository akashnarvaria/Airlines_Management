import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-edit-shopping-items',
  templateUrl: './edit-shopping-items.component.html',
  styleUrls: ['./edit-shopping-items.component.scss']
})
export class EditShoppingItemsComponent implements OnInit {
  flightDetails:any=[];
  flightShopDetail:any=[];
  passengerDetails:any=[];
  index:number;
  input:string='';
  isLoading=false;
  itemIndex:number;
  updateItems=new FormGroup({
    'id':new FormControl(''),
    'itemLink':new FormControl(''),
    'item':new FormControl(''),
    'price':new FormControl('')
    })
    getImage:string;
    constructor(private commonService:CommonService,private route:ActivatedRoute,private router:Router) { }
  
    ngOnInit(): void {
        this.getFlightDetails();
      
    }
  
    getFlightDetails(){
      
      this.commonService.getFlightDetails().subscribe(data=>{
        this.flightDetails=data;

        //getting index
        this.route.params.subscribe(data=>{
        this.index=+data.fid;
        this.itemIndex=+data.itemid;

        //getting passenger details
        this.getPassengerDetails();
      });

      

      //geting shopping item Details
      //console.log(this.index);
      //console.log(this.getFlightDetails[this.index]);
        this.flightShopDetail=this.flightDetails[this.index].shopItems[this.itemIndex];
        this.updateItems=new FormGroup({
          'id':new FormControl(this.flightShopDetail.id),
          'itemLink':new FormControl(this.flightShopDetail.itemLink),
          'item':new FormControl(this.flightShopDetail.item),
          'price':new FormControl(this.flightShopDetail.price)
        });
        this.getImage=this.updateItems.get('itemLink').value;
      });
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
          
          if(this.passengerDetails[i].inflightshop.enabled){
            for(let j=0;j<this.passengerDetails[i].inflightshop.items.length;j++){
              console.log(this.passengerDetails[i].inflightshop.items[j].id);
              if(this.passengerDetails[i].inflightshop.items[j].id==id){
                this.passengerDetails[i].inflightshop.items[j].itemLink=this.updateItems.get('itemLink').value;
                this.passengerDetails[i].inflightshop.items[j].item=this.updateItems.get('item').value;
                this.passengerDetails[i].inflightshop.items[j].price=this.updateItems.get('price').value;
                this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe();
              }
            }
          }
        }
      }
    }

    onPreview(){
      this.getImage=this.updateItems.get('itemLink').value;
    }

    editItems(){
      let newShopItems:any=[];
      
      this.flightDetails[this.index].shopItems[this.itemIndex].itemLink=this.updateItems.get('itemLink').value;
      this.flightDetails[this.index].shopItems[this.itemIndex].item=this.updateItems.get('item').value;
      this.flightDetails[this.index].shopItems[this.itemIndex].price=this.updateItems.get('price').value;
      this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
        this.updatePassengerDetail(this.flightShopDetail.id);
        this.getFlightDetails();
        alert('Edited Successfully');
        //this.router.navigate(['../../../shopping-items/'+this.flightDetails[this.index].flightid],{relativeTo:this.route});
      });
      
    }
}
