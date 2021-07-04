import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-add-shopping-items',
  templateUrl: './add-shopping-items.component.html',
  styleUrls: ['./add-shopping-items.component.scss']
})
export class AddShoppingItemsComponent implements OnInit {
  flightDetails:any=[];
  flightShopDetail:any=[];
  index:number;
  input:string='';
  isLoading=false;
  itemIndex:number;
  addItems=new FormGroup({
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
      });

      //geting shopping item Details
      //console.log(this.index);
      //console.log(this.getFlightDetails[this.index]);
        this.flightShopDetail=this.flightDetails[this.index].shopItems[this.itemIndex];
      });
    }

    onPreview(){
      this.getImage=this.addItems.get('itemLink').value;
    }

    addItem(){
      let newShopItem:any={
        'id':this.flightDetails[this.index].shopItems.length+1,
        'itemLink':this.addItems.get('itemLink').value,
        'item':this.addItems.get('item').value,
        'price':this.addItems.get('price').value
      };
      this.flightDetails[this.index].shopItems.push(newShopItem);
      this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
        this.getFlightDetails();
        alert('Added Successfully');
        this.router.navigate(['../../shopping-items/'+this.flightDetails[this.index].flightid],{relativeTo:this.route});
      });
      
    }
}
