import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-ancillery',
  templateUrl: './ancillery.component.html',
  styleUrls: ['./ancillery.component.scss']
})
export class AncilleryComponent implements OnInit {
  passengerDetails:any=[];
  index:number;
  isLoading=false;
  constructor(private commonService:CommonService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getPassengerDetails();
    console.log(this.passengerDetails);
  }

  getPassengerDetails(){
    this.isLoading=true;
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;

      //getting index
      this.route.params.subscribe(data=>{
        this.index=this.getIndex(+data.pid);
      });
      //getting passenger Details
      this.passengerDetails=this.passengerDetails[this.index];
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
}
