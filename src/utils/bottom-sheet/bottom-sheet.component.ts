import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CommonUtilityService } from '../commonUtility.service';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {
  public selectedSort: string;
  public sortActions: string[] = ['Price(Lowest to Highest)', 'Price(Highest to Lowest)', 'Duration(Shortest to Longest)', 'Duration(Longest to Shortest)', 'Departure(Earlier to Latest)', 'Arrival(Earlier to Latest)', 'Airline(A-Z)', 'Airline(Z-A)'];
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
            public _commonUtilityService: CommonUtilityService) { }

  ngOnInit(): void {
  }

  public openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  public filteFlights(): void {
    this._bottomSheetRef.dismiss();
  }

}
