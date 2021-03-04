import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../os-basepage.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent extends BasePageComponent implements OnInit {


  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
