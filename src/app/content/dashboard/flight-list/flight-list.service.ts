import { Injectable } from '@angular/core';
import * as flights from '../../../../utils/data.json';
@Injectable({
  providedIn: 'root'
})
export class FlightListService {

  constructor() { 
  
  }

  public getData(): any {
    return flights.flights.results;
  }
}
