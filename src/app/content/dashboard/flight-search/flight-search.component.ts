import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators} from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import { CommonUtilityService } from 'src/utils/commonUtility.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  public searchForm: FormGroup;
  constructor( private _commonUtilityService: CommonUtilityService) { 
    this._commonUtilityService.headerName = "Air India";
  }

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      sourceCity: new FormControl(''),
      destinationCity: new FormControl(''),
      departureDate: new FormControl(''),
      returnDepartureDate: new FormControl(''),
      travellers: new FormControl(''),
      class: new FormControl(''),
      idProof: new FormControl(''),
    });
    if (localStorage.getItem('searchParam')) {
      let searchParams = JSON.parse(localStorage.getItem('searchParam'));
      this.searchForm.setValue({
        sourceCity: searchParams['sourceCity'],
        destinationCity: searchParams['destinationCity'],
        departureDate: searchParams['departureDate'],
        returnDepartureDate: searchParams['returnDepartureDate'],
        travellers: searchParams['travellers'],
        class: searchParams['class'],
        idProof: searchParams['idProof'],
      });
    }
  }

  public searchFlight(): void {
    localStorage.setItem('searchParam',JSON.stringify(this.searchForm.value));
    console.log(this._commonUtilityService.searchParam);

  }
}
