import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-view-passenger',
  templateUrl: './view-passenger.component.html',
  styleUrls: ['./view-passenger.component.scss']
})
export class ViewPassengerComponent implements OnInit {
  passengerDetails:any=[];
  passengerDetail:any=[];
  input:string='';
  passport:string='';
  address:string='';
    constructor(private commonService:CommonService,private router:Router,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getPassengerDetails();
    }
  
    getPassengerDetails(){
      
      this.commonService.getPassengerDetails().subscribe(data=>{
        this.passengerDetails=data;
        this.passengerDetail=data;
      });
  
    }
  
    applyFilter(){
      let passengerDetails:any=[];
      passengerDetails=this.passengerDetails;
      if(this.input!=''){
        this.passengerDetail=[];
        for(let i=0;i<passengerDetails.length;i++){
          if(passengerDetails[i].name==this.input){
            this.passengerDetail.push(passengerDetails[i]);
          }
        }
  
      }
      else{
        this.passengerDetail=this.passengerDetails;
      }
    }
    
    applyFilterByPassport(){
      let passengerDetails:any=[];
      passengerDetails=this.passengerDetails;
      if(this.passport!=''){
        this.passengerDetail=[];
        for(let i=0;i<passengerDetails.length;i++){
          if(passengerDetails[i].passport.provided==(this.passport==='true')){
            this.passengerDetail.push(passengerDetails[i]);
          }
        }
  
      }
      else{
        this.passengerDetail=this.passengerDetails;
      }
    }

    applyFilterByAddress(){
      let passengerDetails:any=[];
      passengerDetails=this.passengerDetails;
      if(this.address!=''){
        this.passengerDetail=[];
        for(let i=0;i<passengerDetails.length;i++){
          if(passengerDetails[i].address.provided==(this.address==='true')){
            this.passengerDetail.push(passengerDetails[i]);
          }
        }
  
      }
      else{
        this.passengerDetail=this.passengerDetails;
      }
    }
    
}
