import { Component, OnInit } from '@angular/core';
import { UIString } from 'src/app/os-common';

@Component({
  selector: 'app-os-popup',
  template: "<div [ngStyle]='styleClass' [class]='popupClass'>{{popupText}}</div>",
  styleUrls: ['./os-popup.component.css']
})
export class OsPopupComponent implements OnInit {

  popupText = UIString.PICTURE_TEXT_BUBBLE.toString();

  constructor() {
  }

  public styleClass = {
    opacity:'0.0',
    fontSize:'20px'
  };

  public popupClass = "bubble bubble-bottom-left d-none d-sm-block size-in-then-go";


  ngOnInit() {
  }

}
