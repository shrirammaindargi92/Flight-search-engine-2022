import { Component, OnInit } from '@angular/core';
import { CONTENT } from '../../constants';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public content: any;
  constructor() {
    this.content = CONTENT[0];
   }

  public ngOnInit(): void {  }
}
