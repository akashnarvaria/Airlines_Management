import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-edit-passenger',
  templateUrl: './edit-passenger.component.html',
  styleUrls: ['./edit-passenger.component.scss']
})
export class EditPassengerComponent implements OnInit {
  passengerDetails:any=[];
  index:number;
  passengerDetail:any=[];
  updatePassenger=new FormGroup({
    'id':new FormControl(''),
    'name':new FormControl(''),
    'flightName':new FormControl(''),
    'seatNo':new FormControl(''),
    'passportNo':new FormControl(''),
    'address':new FormControl(''),
    'dob':new FormControl('')
  });
  constructor(private commonService:CommonService,private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPassengerDetails();
    
  }

  getPassengerDetails(){
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;

      //getting index
      this.route.params.subscribe(data=>{
        this.index=this.getIndex(+data.pid);
      });
      //getting passenger details
        this.passengerDetail=this.passengerDetails[this.index];
        this.updatePassenger=new FormGroup({
          'id':new FormControl(this.passengerDetail.id),
          'name':new FormControl(this.passengerDetail.name),
          'flightName':new FormControl(this.passengerDetail.flightname),
          'seatNo':new FormControl(this.passengerDetail.seatNo),
          'passportNo':new FormControl(this.passengerDetail.passport.passportNo),
          'address':new FormControl(this.passengerDetail.address.address),
          'dob':new FormControl('1999-09-07')
        });
        console.log(this.updatePassenger);
        console.log(this.passengerDetail);
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

  editPassenger(){
    this.passengerDetails[this.index].name=this.updatePassenger.get('name').value;
    if(this.updatePassenger.get('passportNo').value.toUpperCase()!='NA'|| this.updatePassenger.get('passportNo').value!==''){
      this.passengerDetails[this.index].passport.provided=true;
      this.passengerDetails[this.index].passport.passportNo=this.updatePassenger.get('passportNo').value;
    }
    if(this.updatePassenger.get('address').value.toUpperCase()!='NA' || this.updatePassenger.get('address').value!=''){
      this.passengerDetails[this.index].address.provided=true;
      this.passengerDetails[this.index].address.address=this.updatePassenger.get('address').value;
    }
    if(this.updatePassenger.get('dob').value!=''){
      this.passengerDetails[this.index].dob.provided=true;
      this.passengerDetails[this.index].dob.dob=this.updatePassenger.get('dob').value;
    }
    console.log(this.passengerDetails[this.index]);
    this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe(()=>{
      alert("Passenger Edited Successfully");
      this.router.navigate(['../../view-passenger'],{relativeTo:this.route});
    });
  }
}
