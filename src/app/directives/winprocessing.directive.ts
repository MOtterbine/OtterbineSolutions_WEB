import {
    Directive ,
    ElementRef ,
    HostListener,
    OnInit,
    Renderer2
  } from '@angular/core';
import { ScrollingService } from '../services/ui/scrolling.service';
//import { ScrollingService } from '../services/scrolling.service';
  declare var $: any;


   @Directive({
    selector:"[windows-processing]",
  })

  export class WindowsProcessingDirective implements OnInit{

    scrollMessage:string;

    constructor(private el: ElementRef, private renderer: Renderer2, private scrollSvc: ScrollingService) {


    }

    ngOnInit(){
      this.scrollSvc.curScrollMsg.subscribe(scrollMsg => this.scrollMessage = scrollMsg);
    }

    newMessage(message:string) {
      this.scrollSvc.changeMessage(message);
    }


  @HostListener('window:scroll', ['$event']) private onScroll($event:Event):void {
   // console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
    this.BackGroundParallaxScroll();
  }

    bckCenterDir: number = 1;
    bckCenter: number = 50;
    scrollPos: number = 0;
    scrollDy: number = 0;
    scrollDp: number = 0;
    w: Window = window;
    private currentStage:number = 1;


    private topSectionOffset:number = 0;

    private BackGroundParallaxScroll() {
      //console.log("BackGroundParallaxScroll");
      // let hFactor = window.innerHeight;
      let header = $('#header');
      let oldPos = this.scrollPos;
      this.scrollPos = window.pageYOffset;
      //   if(window.innerWidth < 992){
      this.scrollDy += this.scrollPos - oldPos;
      // parallax
      this.scrollDp = this.scrollPos/10;
      let ts = $("#top-section-content");
      let tsh = ts.height();
      let hh = header.height();
      let bs = $(".bottom-summary").first();


     // console.log("tsh:", tsh, "scrollPos:", this.scrollPos, "header height:", hh);
     // console.log("tsh:", tsh, "header height:", hh, "scrollPos:", Math.round(this.scrollPos));

     // tsh += hh;
      // if scroll is past the top section
    let scrollNum = (this.scrollPos/(hh+tsh));

    if(scrollNum > .99999) {
      scrollNum = .9999;
    }

    if(this.scrollPos > (tsh)) {
        // the scroll position excluding the fixed top section
        let scrollNum = (this.scrollPos-tsh)/(hh);
      //  document.body.style.setProperty('--scroll', scrollNum.toString());

     //   console.log("ScrollNum:",scrollNum);
     //   console.log("ScrollNum:",scrollNum, "tsh:", tsh, "scrollPos:", this.scrollPos, "header height:", hh);
        // if scrolling is within the header height
        if(scrollNum < 1) {
         //  document.body.style.setProperty('--scroll',scrollNum.toString());
        } else {

          if(scrollNum > .99999) {
            scrollNum = .9999;
          }

        //   this.topSectionOffset = 0;
      //    document.body.style.setProperty('--scroll',".9999");
        }

     //   document.body.style.setProperty('--scroll', scrollNum.toString());
        document.body.style.setProperty('--scroll', scrollNum.toString());

      } else {
        scrollNum = .01;
        document.body.style.setProperty('--scroll', scrollNum.toString());
      }







        switch(this.currentStage) {
          case 1:
            if(this.scrollPos > 339){

                this.newMessage("stage2");
                this.currentStage = 2;
              //  console.log("stage2");// - ypos:" + this.scrollPos);

              //  $('body').css('background',"None");
            }


            break;
          case 2:
            if(this.scrollPos <= 110) {// && this.scrollPos > 0) {
              this.newMessage("stage1");
              //console.log("stage1");// - ypos:" + this.scrollPos);
              this.currentStage = 1;

            }
            return;
        }



        //if(this.scrollPos < 11){
          // if(this.scrollMessage !== "") {
          //   this.newMessage("");
          // }
        //}else
        // if(/*this.scrollPos > 10 && */this.scrollPos < 340){
        //   if(this.scrollMessage !== "stage1") {
        //     this.newMessage("stage1");
        //     //console.log("stage1");
        //     //$('#center-body').css('background-image',"url('assets/images/Bay.jpeg')");
        //   }
        // }
        // else if(this.scrollPos > 339 && this.scrollPos <2200){
        //   if(this.scrollMessage !== "stage2") {
        //     this.newMessage("stage2");
        //     //console.log("stage2");

        //   //  $('body').css('background',"None");
        //   }
        // }
        // else if(this.scrollPos > 215 && this.scrollPos <340){
        //   if(this.scrollMessage !== "stage3") {
        //     this.newMessage("stage3");
        //     console.log("stage3");
        //   }
        // }
        // else{// if(this.scrollPos > 246 && this.scrollPos <320){
        //   if(this.scrollMessage !== "stage4") {
        //     this.newMessage("stage4");
        //     console.log("stage4");
        //   }
        // }
        // else{
        //   if(this.scrollMessage !== "") {
        //     this.newMessage("");
        //   }
        // }

    //  }






         // var targetElem = $(document.body);
        var targetElem = $('.parallax1');
        if(targetElem.length > 0) {
      //  const componentPosition = this.el.nativeElement.offsetTop
      //  const scrollPosition = window.pageYOffset


        var backgroundPos = targetElem.css('backgroundPositionY').split("%");
        backgroundPos[0] = this.bckCenter  + this.scrollDp ;
        var bkStr = backgroundPos[0] + "%";
     //  console.log("background-position-y: "+ bkStr);

        //Set the background position
        targetElem.css('backgroundPositionY', bkStr  );
      }
     // console.log("Scrolling up");

      // let headerSpacer = $("#header-spacer");

      // scrolling down? - hide the menu if so...and we are far enough down the page
      if(this.scrollDy == 0) {

      } else if(this.scrollDy > 0) {
        // scrolling down...
        if(this.scrollPos > tsh) {//} || (this.scrollDy < 0 && this.scrollPos < 10)) {//this.scrollDy < -40)
         //  header.addClass('verticalClose');
         //  header.removeClass('verticalOpen');
            // header.removeClass('verticalClose');
              //header.addClass('verticalOpen');
          //    headerSpacer.removeClass('verticalClose');
          //    headerSpacer.addClass('verticalOpen');
          }

      } else {
        // scrolling up...

          // open the menu only after the user scrolls at least 40 pixels
         // if(this.scrollPos < tsh) {//} || (this.scrollDy < 0 && this.scrollPos < 10)) {//this.scrollDy < -40)
           //  header.removeClass('verticalClose');
          //    header.addClass('verticalOpen');
         //   headerSpacer.addClass('verticalClose');
          //  headerSpacer.removeClass('verticalOpen');

      //  } else {
        //     header.removeClass('verticalClose');
        //     header.addClass('verticalOpen');

       //   }
      }
      // reset scroll delta
      this.scrollDy = 0;
    }


  @HostListener('window:resize', ['$event'])
  private onResize($event:Event):void {
    //console.log("On Resize...");

    let wh = $(window).innerHeight();
    let ww = $(window).width();


    let boxCont = $(".boxes-container");
    // let s1 = $("#section-1").height();
    // let bs = $("#bottom-section");
    let hdr = $("#header");
    //let ts = $("#top-section");
    let ts = $("#top-section");

    let ft = $('footer');
    // }
    //console.log("ts:", ts.height());
    $('#footer-spacer').height(ft.height());

    ts.css("padding-top",($('#header').height() + 1) + "px") - this.topSectionOffset;
    ts.height($("#top-section-content").height());


   // if(this.w.innerHeight > ts.height()) {
      let msh = wh + hdr.height() - ts.height();// - ft.height();

     // boxCont.height(msh);
      $("#section-1").height(msh);


  }

  @HostListener('window:scroll', ['$event'])
  private onScrollEvent($event:Event):void {
    $("#sidebar-wrapper").removeClass("active");

    this.BackGroundParallaxScroll();


   }

}


