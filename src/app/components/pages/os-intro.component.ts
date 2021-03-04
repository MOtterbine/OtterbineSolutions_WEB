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




@Component({
  selector: 'os-intro',
  templateUrl: './os-intro.component.html',
  styleUrls: [ "pages.less" ],
  animations: [
    trigger(
      'menuState',
      [
        state('inactive', style({
          transform: 'scale(1)',
          color:'#FFFFDF'
        })),
        state('active', style({
          color:'#48d1cc',
          transform: 'scale(1.01)'
        })),
        transition('active => inactive', animate('750ms ease')),
        transition('inactive => active', animate('750ms ease'))
      ])
  ],
  providers: [
      ListService,
    { provide: 'listType', useValue: 'main-page' },
  //  AdService
  ],
  changeDetection: ChangeDetectionStrategy.Default

})



export class OsIntroComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() ads: IAdvertisement[];
  @Input() nasaFeed: any;
  displayItems:IItem[];
  public scrollMsg: string;
  public infColor = 'blue';

  setScrollMsg(scrlMsg:string){
    //console.log("setScrollMsg():" + scrlMsg);
    this.scrollMsg = scrlMsg;
    //this.scrollSvc.changeMessage(scrlMsg);
    //return;
    if(this.displayItems === null || this.displayItems === undefined) return;
       forEach(this.displayItems,item=>{
           item.state = "inactive";
      });
      switch(scrlMsg.toLowerCase()){

        case "stage1":
          this.displayItems[0].state = "active";
          break;
        case "stage2":
          this.displayItems[1].state = "active";
          break;
        case "stage3":
          this.displayItems[2].state = "active";
          break;
      case "stage4":
        this.displayItems[3].state = "active";
        break;

      }

  }

  constructor(private el: ElementRef, private listSrv: ListService, private scrollSvc: ScrollingService,
                    private rssFeedSvc:OSRSSService,// private menuService: AdService,
                    private documentService:DocumentService, private sanitizer: DomSanitizer) {


  }

  lgAd:SafeUrl;
  smAd:SafeUrl;

  public errorMessage = "All is Good";
  public biText = "whammy";

  ngOnDestroy() { }


  async ngOnInit() {


    this.scrollSvc.curScrollMsg.subscribe(msg => this.setScrollMsg(msg));
    this.listSrv.currentList.subscribe(list => this.displayItems = list);

    // this nasa feed works and the markup carousel is in main.component.ts
    this.rssFeedSvc.GetMainFeedPromise("https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss")
                   .then(data => this.SetNasaRssData(data))
                   .catch(error => this.errorHandler(error.message));

  //  this.rssFeedSvc.GetMainFeedObservable("https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss")
  //         .subscribe(data => this.SetNasaRssData(data), error => this.errorHandler(error));

  }


  private errorHandler(error){
    this.infColor = 'red';
    this.errorMessage = error;
  }

  public GoToTop = () => {
    if(window.scrollY > 0){
      $("html, body").animate({ scrollTop: 0 }, 1300,"swing",()=>
      {

      });
    }
  }

  ngAfterViewInit(){

    //console.log("OsMainComponent ngAfterViewInit");

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


  SetNasaRssData = (data) => {
    this.infColor = 'blue';
   // console.log(JSON.stringify(data));
    // show the data
    //var feedObjects = JSON.stringify(data);
    //console.log(feedObjects);

   // console.log("rss status: " + data.status);

    if (data.status.toLowerCase() === "ok") {
     // console.log("title: " + data.feed.title);
      //console.log("thumbnail: " + data.thumbnail);
      var activeItemSet = false;
      var slideNum = 0;
      if(data.feed.title === null || data.feed.title === undefined){
        $("#rss-title").text("The Latest Images From NASA");
      } else{
        $("#rss-title").text(data.feed.title);
      }
      forEach(data.items, (value, key)=> {
      //	console.log("Key:" + key);
      //	console.log("image:" + value.enclosure.link);
        if (activeItemSet === false) {
          var carouselMarkup =
          $("#carousel1 .carousel-inner").append("<div class=\"carousel-item active\"><a href=\"" + value.link + "\" target=\"_blank\"><img src=\"" + value.enclosure.link + "\" alt=\"" + value.title + "\" style=\"\"><div class=\"carousel-caption\" style=\"z-index:99999;\"><p>" + value.title + "</p></div></a></div>");
          $("#carousel1-indicators").append("<li data-target=\"#carousel1\" data-slide-to=\"0\" class=\"active\"></li>");
          activeItemSet = true;
        }
        else {
          $("#carousel1 .carousel-inner").append("<div class=\"carousel-item\"><a href=\"" + value.link + "\" target=\"_blank\"><img src=\"" + value.enclosure.link + "\" alt=\"" + value.title + "\" style=\"\"><div class=\"carousel-caption\" style=\"z-index:99999;\"><p>" + value.title + "</p></div></a></div>");
          $("#carousel1-indicators").append("<li data-target=\"#carousel1\" data-slide-to=\"" + slideNum + "\"></li>");
        }
        slideNum++;

      });

    }
  }




  ChangeList(listName:string) {
    this.listSrv.changeList(listName)
  }
  ChangeScrollEffect(msg:string) {
    this.scrollSvc.changeMessage(msg);
  }


  @HostListener('click', ['$event']) private onClick($event:Event):void {
    //console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
      let srcElement = $event.currentTarget as HTMLDivElement;
      switch(srcElement.id){
        case "go-to-top":
          this.GoToTop();
          break;
      }
  }




}
