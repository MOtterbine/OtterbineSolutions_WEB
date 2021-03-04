import {
  AfterViewInit,
  Component
} from '@angular/core';
import * as $ from 'jquery';
/*import { ParentComponent } from './Parent.component';
import { SiblingComponent } from './Sibling.component';
*/

@Component({
  selector: 'os-page1',
  templateUrl: './os-page1.component.html',
  styleUrls: ['./pages.less']
})

export class OsPage1Component implements AfterViewInit {


  constructor(){
    //console.log("OsIntroComponent constructor");
  }

  ngAfterViewInit(){
   // console.log("OsPage1Component initialized");

    //console.log("ngAfterViewInit");
    document.title = this.title;


    // trigger the resize event...
    //console.log("ngAfterViewInit");
    if (typeof(Event) === 'function') {
      // modern browsers
      window.dispatchEvent(new Event('resize'));
    } else {
      // for IE and other old browsers
      // causes deprecation warning on modern browsers
      var evt = window.document.createEvent('UIEvents');
      evt.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(evt);
    }

    if(window.scrollY > 0){
      $("html, body").animate({ scrollTop: 0 }, 1500,"swing",()=>
      {

      });
    }



  }

  title:string = "Otterbine Portfolio | Page1";
  name:string = "Huite Craquer";
  email:string = "Huite@jam.com";
   address = {
      street: "100 Main Street",
      city  : "New York",
      state : "NJ"
   }
}

