import {
//  AfterViewInit,
  Component, Input
} from '@angular/core';
import * as $ from 'jquery';
import { BasePageComponent } from '../pages/os-basepage.component';
/*import { ParentComponent } from './Parent.component';
import { SiblingComponent } from './Sibling.component';
*/

@Component({
  selector: 'os-business-card',
  templateUrl: './os-business-card.component.html',
  styleUrls: ['../pages/pages.less','../fragments/os-business-card.component.less']
})

export class OsBusinessCardComponent {//} extends BasePageComponent{//} implements AfterViewInit {


  constructor(){
  //  super();
    //console.log("OsIntroComponent constructor");
  }

  @Input() isHidden:boolean;
  @Input() osLogoImage:string;
  title:string = "Mike Otterbine Portfolio | Page1";
  name:string = "Huite Craquer";
  email:string = "Huite@jam.com";
   address = {
      street: "100 Main Street",
      city  : "New York",
      state : "NJ"
   }
}

