import { Component, OnInit } from '@angular/core';
import { CommonUtilityService } from '../../utils/commonUtility.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _commonUtilityService: CommonUtilityService,
    public _location: Location) { }

  ngOnInit(): void {
  }

  public goBack(): void {
    this._location.back();
  }

}
