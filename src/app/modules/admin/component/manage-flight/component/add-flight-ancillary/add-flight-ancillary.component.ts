import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-add-flight-ancillary',
  templateUrl: './add-flight-ancillary.component.html',
  styleUrls: ['./add-flight-ancillary.component.scss']
})
export class AddFlightAncillaryComponent implements OnInit {
  addAncillary=new FormGroup({
    'service':new FormControl('')
    })
    flightDetails:any=[];
    flightAncillaryDetail:any=[];
    index:number;
    ancillaryIndex:number;
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
          this.flightAncillaryDetail=this.flightDetails[this.index].ancillary.services;
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
    
      addAncillaryService(){
        let service={
          "id":this.flightAncillaryDetail.length+1,
          "service":this.addAncillary.get('service').value
        }
        this.flightDetails[this.index].ancillary.services.push(service);
        this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe(()=>{
          alert("Service Added Successfully");
          this.router.navigate(['../../flight-ancillary/'+this.flightDetails[this.index].flightid],{relativeTo:this.route});
        });
      }
}
