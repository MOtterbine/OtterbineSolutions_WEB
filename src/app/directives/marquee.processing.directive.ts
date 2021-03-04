import { 
    Directive , 
    ElementRef , 
    Renderer,
    HostListener,  
    OnInit
  } from '@angular/core';
import { ScrollingService } from '../services/ui/scrolling.service';
//import { ScrollingService } from '../services/scrolling.service';
  declare var $: any;


   @Directive({
    selector:"#banner-block",
  })
  
  export class MarqueeProcessingDirective implements OnInit{ 

    scrollMessage:string;

    constructor(private el: ElementRef, private renderer: Renderer, private scrollSvc: ScrollingService) {
    
   
    }

    ngOnInit(){
    }

    wordShown:number = 0;
    // Code for Chrome, Safari and Opera
    @HostListener("webkitAnimationIteration", ['$event']) 
    // Standard syntax
    @HostListener("animationiteration", ['$event']) 
    myEndFunction($event:Event):void {

        console.log("Shitaki");

        switch(this.wordShown)    {
            case 0:
              $("#fading-words-display").text("Solving Interesting Problems");
              this.wordShown++;
              break;
            case 1:
              $("#fading-words-display").text("Finding The Best Solutions");
              this.wordShown++;
              break;
            case 2:
              $("#fading-words-display").text("Asking The Right Questions");
              this.wordShown++;
              break;
            case 3:
              $("#fading-words-display").text("Dedication");
              this.wordShown++;
              break;
            case 4:
              $("#fading-words-display").text("Integrity");
              this.wordShown++;
              break;
            case 5:
              $("#fading-words-display").text("Customized Because You're Unique");
              this.wordShown++;
              break;
            case 6:
              $("#fading-words-display").text("Excellence and Pride");
              this.wordShown = 0;
              break;
      
          }
              //console.log("it happened...");
        }
      

    // @HostListener('window:resize', ['$event']) 
    // private onResize($event:Event):void {
    //     $('#footer-spacer').height($('footer').height());
    //     $('#header-spacer').height($('#header').height());
    // }
}
   
