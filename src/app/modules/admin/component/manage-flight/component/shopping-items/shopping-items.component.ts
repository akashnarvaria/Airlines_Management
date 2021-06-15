import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.scss']
})
export class ShoppingItemsComponent implements OnInit {
  flightDetails:any=[];
  flightShopDetail:any=[];
  index:number;
  input:string='';
  isLoading=false;
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
        this.flightShopDetail=this.flightDetails[this.index].shopItems;
      });
    }
  
    applyFilter(){
        let flightDetails:any=[];
        flightDetails=this.flightDetails;
        if(this.input!=''){
          this.flightShopDetail=[];
          for(let i=0;i<flightDetails[this.index].shopItems.length;i++){
            if(flightDetails[this.index].shopItems[i].item.toUpperCase()==this.input.toUpperCase()){
              this.flightShopDetail.push(flightDetails[this.index].shopItems[i]);
            }
          }
  
        }
        else{
          this.flightShopDetail=flightDetails[this.index].shopItems;
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
      let newShopItems:any=[];
      for(let i=0;i<this.flightDetails[this.index].shopItems.length;i++){
        if(i!=index){
          newShopItems.push(this.flightDetails[this.index].shopItems[i]);
        }
      }
      this.flightDetails[this.index].shopItems=newShopItems;
      this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
        this.getFlightDetails();
        alert('Deleted Successfully');
      });
      
    }
}
