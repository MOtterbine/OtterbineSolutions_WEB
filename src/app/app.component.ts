import {
  AfterViewInit,
    Component,OnInit
  } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit, AfterViewInit{

  title = 'Main Application';
  constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit(){

      //console.log("AppComponent ngAfterViewInit");

    }

}



