import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private httpClient: HttpClient) { }
  
  getFlightDetails(){
    const URL="http://localhost:3000/airlines";
  }

}
