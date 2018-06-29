import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable({
  providedIn: 'root'
})
export class CommonServices {

  constructor(private http: HttpClient) { }
  // get stats/players servers service
  getStats(){
    const api = "http://localhost:3000/timer-api/status";
    return this.http.get(api, httpOptions);
  }
  // dashboard most word records card service
  getMostWordRecords() {
    const api = "http://localhost:3000/timer-api/dashboard/most-word-records";
    return this.http.get(api, httpOptions);
  }
  // dashboard most points card service
  getMostPoints() {
    const api = "http://localhost:3000/timer-api/dashboard/most-points";
    return this.http.get(api, httpOptions);
  }
  getTopMaps() {
    const api = "http://localhost:3000/timer-api/dashboard/top-maps";
    return this.http.get(api, httpOptions);
  }
  getNewMaps() {
    const api = "http://localhost:3000/timer-api/dashboard/new-maps";
    return this.http.get(api, httpOptions);
  }
}