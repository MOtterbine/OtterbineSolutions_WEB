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
import { BasePageComponent } from './os-basepage.component';

import { timer } from 'rxjs';
 const t = timer(30000);

 import {
  Router, NavigationEnd
} from '@angular/router';



@Component({
  selector: 'os-main',
  templateUrl: './os-main.component.html',
  styleUrls: [ "pages.less" ],//, "../header/header.less"],
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
   // AdService
  ],
  changeDetection: ChangeDetectionStrategy.Default

})



export class OsMainComponent extends BasePageComponent implements AfterViewInit, OnInit, OnDestroy {
  @Input() ads: IAdvertisement[];
  @Input() nasaFeed: any;
  displayItems:IItem[];
  public scrollMsg: string;
  public infColor = 'blue';
  public showNasaFeed1 = true;
  public hide_top_section:boolean = false; // init
  public hide_section_1 = false;
  public hide_section_2 = true;
  public hideStage4 = true;

  setScrollMsg(scrlMsg:string){

   // console.log("setScrollMsg():" + scrlMsg);
    //return;
    this.scrollMsg = scrlMsg;
    // this.scrollSvc.changeMessage(scrlMsg);
    // return;
    // if(this.displayItems === null || this.displayItems === undefined) return;
    //    forEach(this.displayItems,item=>{
    //        item.state = "inactive";
    //   });


      switch(scrlMsg.toLowerCase()){
        case "stage1":
         // console.log("Jam 1");
         // this.styleClass.display = 'block'
          this.hide_top_section = false;
         // this.hide_section_1 = false;
         // this.hide_section_2 = true;
         // this.hideStage4 = true;
          // this.displayItems[0].state = "active";
          break;
        case "stage2":
         // console.log("Jam 2");
         // this.styleClass.display = 'none'
          this.hide_top_section = false;
        //  this.hide_section_1 = false;
        //  this.hide_section_2 = true;
          // this.displayItems[1].state = "active";
          break;
        // case "stage3":
        //   this.hide_top_section = false;
        //   this.hide_section_1 = false;
        //   this.hide_section_2 = true;
        //   // this.displayItems[2].state = "active";
        //   break;
        // case "stage4":
        //   this.hide_top_section = false;
        //   this.hide_section_1 = false;
        //   this.hide_section_2 = true;
        //   // this.displayItems[3].state = "active";
        //   break;

      }

  }

  constructor(private el: ElementRef, private listSrv: ListService, private scrollSvc: ScrollingService,
                    private rssFeedSvc:OSRSSService, //private menuService: AdService,
                    private documentService:DocumentService, private sanitizer: DomSanitizer, private router: Router) {
                      super();
                      //console.log("Super()...");
                      //this.$topSection = $("##top-section-content");

   }


  osLogoImage:string= ".\\assets\\images\\OS.png";

  lgAd:SafeUrl;
  smAd:SafeUrl;
  $topSection = $("#top-section-content");

  public errorMessage = "All is Good";
  public biText = "whammy";
  public styleClass = {
    height: this.$topSection.height() + "px",
    minHeight:'250px',
   // position: 'fixed',
    // marginTop: '.3em',
   // minHeight:'325px',
    display:'block'
  }
  public inputClass = "text-danger";
  public srvSubscription: any;

  ngOnDestroy() { super.ngOnDestroy(); }


  async ngOnInit() {
    super.ngOnInit();


    this.scrollSvc.curScrollMsg.subscribe(msg => this.setScrollMsg(msg));
    this.listSrv.currentList.subscribe(list => this.displayItems = list);

    let tsc = $("#top-section-content");
    this.styleClass.height = (tsc.outerHeight() ) +'px';

    $(document).prop("title", "Otterbine Solutions | Mike Otterbine | Web App")



  }


  private errorHandler(error){
    this.infColor = 'red';
    this.errorMessage = error;
  }


  ngAfterViewInit(){

    super.ngAfterViewInit();

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
        console.log("Nasa RSS feed title:", data.feed.title);
        $("#rss-title").text(data.feed.title);
      }
      forEach(data.items, (value, key)=> {
      //	console.log("Key:" + key);
      //	console.log("image:" + value.enclosure.link);
        if (activeItemSet === false) {
          var carouselMarkup =
          $("#carousel1 .carousel-inner").append("<div class=\"carousel-item active\"><a href=\"" + value.link + "\" target=\"_blank\"><img src=\"" + value.enclosure.link + "\" alt=\"" + value.title + "\" style=\"\"><div class=\"carousel-caption\" style=\"\"><p>" + value.title + "</p></div></a></div>");
          $("#carousel1-indicators").append("<li data-target=\"#carousel1\" data-slide-to=\"0\" class=\"active\"></li>");
          activeItemSet = true;
        }
        else {
          $("#carousel1 .carousel-inner").append("<div class=\"carousel-item\"><a href=\"" + value.link + "\" target=\"_blank\"><img src=\"" + value.enclosure.link + "\" alt=\"" + value.title + "\" style=\"\"><div class=\"carousel-caption\" style=\"\"><p>" + value.title + "</p></div></a></div>");
          $("#carousel1-indicators").append("<li data-target=\"#carousel1\" data-slide-to=\"" + slideNum + "\" ></li>");
        }
        slideNum++;

      });

    }

   // this.srvSubscription.unsubscribe();
  }




  ChangeList(listName:string) {
    this.listSrv.changeList(listName)
  }
  ChangeScrollEffect(msg:string) {
    this.scrollSvc.changeMessage(msg);
  }


  @HostListener('click', ['$event']) private onClick($event:Event):void {
    //console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);

    let srcElement = $event.currentTarget as HTMLButtonElement;
   // switch($event.srcElement.id){
      switch(srcElement.id){
        case "go-to-top":
          this.GoToTop();
          break;
      }
  }




}
