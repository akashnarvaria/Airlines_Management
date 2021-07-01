import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.scss']
})
export class AddPassengerComponent implements OnInit {
  passengerDetails: any = [];
  index: number;
  flightDetails: any = [];
  flightSeatDetails: any = [];
  flightName: string = '';
  flightIndex: number;
  addPassenger = new FormGroup({
    'name': new FormControl(''),
    'flightName': new FormControl(''),
    'seatNo': new FormControl(''),
    'passportNo': new FormControl(''),
    'address': new FormControl(''),
    'dob': new FormControl(''),
    'infants': new FormControl(''),
    'wheelchair': new FormControl('')
  });
  constructor(private commonService: CommonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPassengerDetails();
  }

  getPassengerDetails() {
    this.commonService.getPassengerDetails().subscribe(data => {
      this.passengerDetails = data;
      console.log(this.passengerDetails);
      //get Flight Details
      this.getFlightDetails();
    });
  }

  getFlightDetails() {

    this.commonService.getFlightDetails().subscribe(data => {
      this.flightDetails = data;
    });
  }


  getIndex(pId: number) {
    for (let i = 0; i < this.passengerDetails.length; i++) {
      if (this.passengerDetails[i].id == pId) {
        return i;
      }
    }
    return -1;
  }

  addPassengerToFlight(){
    for(let i=0;i<this.flightDetails[this.flightIndex].seats.length;i++){
      if(this.flightDetails[this.flightIndex].seats[i].sno==this.addPassenger.get('seatNo').value){
        this.flightDetails[this.flightIndex].seats[i].booked=true;
        this.flightDetails[this.flightIndex].seats[i].available=false;
        this.flightDetails[this.flightIndex].seats[i].wheelchair=(this.addPassenger.get('wheelchair').value==='true');
        this.flightDetails[this.flightIndex].seats[i].infants=(this.addPassenger.get('infants').value==='true');
      }
    }
    this.commonService.passengerCheckinInFlight(this.flightDetails).subscribe();
  }

  addPassengerDetails() {
    let isPassport=false;
    let isAddress=false;
    let isDob=false;
    let passportNo='NA';
    let address='NA';
    let dob='NA';
    if(this.addPassenger.get('passportNo').value.toUpperCase!=='NA' || this.addPassenger.get('passportNo').value!==''){
      isPassport=true;
      passportNo=this.addPassenger.get('passportNo').value;
    }
    if(this.addPassenger.get('address').value.toUpperCase!=='NA' || this.addPassenger.get('address').value!==''){
      isAddress=true;
      address=this.addPassenger.get('address').value;
    }
    if(this.addPassenger.get('dob').value.toUpperCase!==''){
      isDob=true;
      dob=this.addPassenger.get('dob').value;
    }
    let passengerDetail = {
      "id": this.passengerDetails[this.passengerDetails.length - 1].id+1,
      "flightid": this.flightDetails[this.flightIndex].flightid,
      "flightname": this.flightName,
      "name": this.addPassenger.get('name').value,
      "seatNo": this.addPassenger.get('seatNo').value,
      "ancillary": {
        "mealRequired": false,
        "meal": [{}],
        "serviceRequired": false,
        "services": [{}]
      },
      "inflightshop": {
        "enabled": false,
        "items": [{}]
      },
      "checkin": false,
      "wheelchair": (this.addPassenger.get('infants').value==='true'),
      "infants": (this.addPassenger.get('wheelchair').value==='true'),
      "passport": {
        "provided": isPassport,
        "passportNo": passportNo
      },
      "address": {
        "provided": isAddress,
        "address": address
      },
      "dob": {
        "provided": isDob,
        "dob": dob
      }
    };
    this.passengerDetails.push(passengerDetail);
    this.commonService.passengerCheckinInPassenger(this.passengerDetails).subscribe(()=>{
        this.addPassengerToFlight();
         alert('Passenger Added Successfully');
         this.router.navigate(['../view-passenger'],{relativeTo:this.route});
       });
    // this.commonService.addPassenger(passengerDetail).subscribe(()=>{
    //   alert('Passenger Added Successfully');
    // });
  }

  onChange() {
    this.flightSeatDetails = [];
    for (let i = 0; i < this.flightDetails.length; i++) {
      if (this.flightDetails[i].name == this.flightName && this.flightName !== '') {
        this.flightIndex = i;
        for (let j = 0; j < this.flightDetails[i].seats.length; j++) {
          if (this.flightDetails[i].seats[j].available == true) {
            this.flightSeatDetails.push(this.flightDetails[i].seats[j].sno);
          }
        }
      }
    }
  }
}
