import { Component, OnInit } from '@angular/core';
import { CONTENT } from '../../../constants';
import { CommonUtilityService } from '../../../utils/commonUtility.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public content: any;

  constructor(private _commonUtilityService: CommonUtilityService) {
    this.content = CONTENT[0];
   }

  ngOnInit(): void {
    this._commonUtilityService.headerName = "Flight Search";
  }

  public tabChange(event: any): void {

  }

}
