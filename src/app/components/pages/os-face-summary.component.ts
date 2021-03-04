import { Component, OnInit } from '@angular/core';
import { UIString } from 'src/app/os-common';
import { BasePageComponent } from './os-basepage.component';

@Component({
  selector: 'app-os-face-summary',
  templateUrl: './os-face-summary.component.html',
  styleUrls: ['./os-face-summary.component.css']
})
export class OsFaceSummaryComponent {

  greeting1 = UIString.WELCOME_GREETING_1.toString();
  greetingDetail1 = UIString.WELCOME_GREETING_DETAIL1.toString();
  greetingDetail2 = UIString.WELCOME_GREETING_DETAIL2.toString();
  // greetingDetail1 = "This page is an ongoing experiment in web application design.";
  // greetingDetail2 = "This web app is desiged with Angular and uses a mongo database via a connection to Amazon Web Services. Thanks for stopping by.";
  constructor() {

  }


}
