import { Component } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { CommonUtilityService } from '../utils/commonUtility.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-search-engine';

  constructor(private _router:Router,
            private _commonUtilityService: CommonUtilityService) {

  }


  public ngOnInit(): void {
    this._router.events
    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
      this._commonUtilityService.currentRoute = events[1].urlAfterRedirects;
      console.log(this._commonUtilityService.currentRoute);
    });
  }
}
