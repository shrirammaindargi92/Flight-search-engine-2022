import { Component, OnInit } from '@angular/core';
import { CommonUtilityService } from '../../../../utils/commonUtility.service';
import * as flights from '../../../../utils/data.json';
import { Location } from '@angular/common';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../../../../utils/bottom-sheet/bottom-sheet.component';
import { FlightListService } from './flight-list.service';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  public flightList: any[];
  public classList: String[];
  constructor(public _commonUtilityService: CommonUtilityService,
              public _location: Location,
              private _bottomSheet: MatBottomSheet,
              private _flightListService: FlightListService) { }

  ngOnInit(): void {
    this.classList = flights.classList;
    this._commonUtilityService.searchParam = JSON.parse(localStorage.getItem('searchParam'));
    this._commonUtilityService.headerName = "Search list";
    this.filterList();
  }

  public filterList(): void {
    this.flightList = this._flightListService.getData().filter(flightElement => 
      
      (flightElement.sourceCity.toLocaleLowerCase() == this._commonUtilityService.searchParam.sourceCity.toLocaleLowerCase())
      && (flightElement.destinationCity.toLocaleLowerCase() == this._commonUtilityService.searchParam.destinationCity.toLocaleLowerCase())
      && (flightElement.class.toLocaleLowerCase() == this._commonUtilityService.searchParam.class.toLocaleLowerCase()));
  }
  public openSortBottomSheet(): void {
    this._commonUtilityService.selectedAction = "sort";
    this._bottomSheet.open(BottomSheetComponent);
  }
  public openFilterBottomSheet(): void {
    this._commonUtilityService.selectedAction = "filter";
    this._bottomSheet.open(BottomSheetComponent);
  }

}
