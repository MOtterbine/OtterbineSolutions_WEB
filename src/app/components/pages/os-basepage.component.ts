import {
    AfterViewInit,
    Input,
    OnInit,
    OnDestroy,
    Component,
    HostListener,
    ElementRef,
    ChangeDetectionStrategy,
  } from '@angular/core';

  import {
    trigger,
    state,
    transition,
    animate,
    style
   } from '@angular/animations';
  import { IItem } from '../../interfaces/os-iitem';
  import { ListService } from '../../services/list/os-list.service';
  import { ScrollingService } from '../../services/ui/scrolling.service';
  import { forEach } from '@uirouter/core';
  import { OSRSSService } from '../../services/rss.service';
  //import { AdService } from '../../services/ad/advertisement.service';

  import { IAdvertisement } from '../../interfaces/iadvertisement';
  import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
  import { DocumentService } from '../../services/document/document.service';

  import { timer } from 'rxjs';
   const t = timer(30000);

   import {
    Router, NavigationEnd
  } from '@angular/router';



  @Component({
    template:'',
    //selector: 'os-main',
    //templateUrl: './os-main.component.html',
    //styleUrls: ["pages.less" ],//, "../header/header.less"],
    // animations: [
    //   trigger(
    //     'menuState',
    //     [
    //       state('inactive', style({
    //         transform: 'scale(1)',
    //         color:'#FFFFDF'
    //       })),
    //       state('active', style({
    //         color:'#48d1cc',
    //         transform: 'scale(1.01)'
    //       })),
    //       transition('active => inactive', animate('750ms ease')),
    //       transition('inactive => active', animate('750ms ease'))
    //     ])
    // ],
    // providers: [
    //     ListService,
    //   { provide: 'listType', useValue: 'main-page' },
    //   AdService
    // ],
    changeDetection: ChangeDetectionStrategy.Default

  })






export class BasePageComponent implements AfterViewInit, OnInit, OnDestroy {

    constructor(){
     //   console.log("BasePageComponent constructor");

        // // trigger the resize event...
        // if (typeof(Event) === 'function') {
        //   // modern browsers
        //   window.dispatchEvent(new Event('resize'));
        // } else {
        //   // for IE and other old browsers
        //   // causes deprecation warning on modern browsers
        //   var evt = window.document.createEvent('UIEvents');
        //   evt.initEvent('resize', true, false);
        //   window.dispatchEvent(evt);
        // }
        // this.GoToTop();

    }

    protected GoToTop = () => {
        if(window.scrollY > 0){
          $("html, body").animate({ scrollTop: 0 }, 1300,"swing",()=>
          {

          });
        }
      }


    private pad(num:number, size:number) {
      var sNum = num.toString();
      while (sNum.length < size) sNum = "0" + sNum;
      return sNum;
    }

    protected GetDateTimeString = ():String=>{
      // DATE AND TIME
      let now = new Date();
      let dateStamp = now.getUTCFullYear() + this.pad((now.getUTCMonth() +1),2) + this.pad(now.getUTCDate(),2);
      return dateStamp + "T" + this.pad(now.getUTCHours(), 2) + this.pad(now.getUTCMinutes(), 2) + this.pad(now.getUTCSeconds(), 2) + "Z";
    }

    ngOnDestroy() { }


    ngOnInit() {}

    ngAfterViewInit(){

     //     console.log("BasePageComponent ngAfterViewInit");

      // trigger the resize event...
      if (typeof(Event) === 'function') {
        // modern browsers
        window.dispatchEvent(new Event('resize'));
      } else {
        // for IE and other old browsers
        // causes deprecation warning on modern browsers
        var evt = window.document.createEvent('UIEvents');
        evt.initEvent('resize', true, false);
        window.dispatchEvent(evt);
      }

      this.GoToTop();

    }

}


