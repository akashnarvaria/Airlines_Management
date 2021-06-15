import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }
  
  getFlightDetails(){
    const URL="https://airlines-d4a3f-default-rtdb.firebaseio.com/flight.json";
    return this.httpClient.get(URL);
  }
  // getFlightDetailsByFlightId(id:number){
  //   const URL="https://airlines-d4a3f-default-rtdb.firebaseio.com/flight/"+id+"/seats.json";
  //   return this.httpClient.get(URL);
  // }
  // passengerCheckin1(id:number,flightDetails:any){
  //   const URL="https://airlines-d4a3f-default-rtdb.firebaseio.com/flight/"+id+"/seats.json";
  //   return this.httpClient.put(URL,flightDetails);
  // }
  getPassengerDetails(){
    const URL="https://airlines-d4a3f-default-rtdb.firebaseio.com/passenger.json";
    return this.httpClient.get(URL);
  }
  passengerCheckinInFlight(flightDetails:any){
    const URL="https://airlines-d4a3f-default-rtdb.firebaseio.com/flight.json";
    return this.httpClient.put(URL,flightDetails);
  }
  passengerCheckinInPassenger(passengerDetails:any){
    const URL="https://airlines-d4a3f-default-rtdb.firebaseio.com/passenger.json";
    return this.httpClient.put(URL,passengerDetails);
  }
  addPassenger(passenger:any){
    const URL="https://airlines-d4a3f-default-rtdb.firebaseio.com/passenger.json";
    return this.httpClient.post(URL,passenger);
  }
}
