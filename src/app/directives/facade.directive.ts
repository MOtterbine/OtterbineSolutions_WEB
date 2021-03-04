import { 
    Directive , 
    ElementRef , 
    Renderer,
    HostListener  
  } from '@angular/core';


  @Directive({
    selector:"H11, h11"
  })
   export class WindowFacadeDirective { 
     constructor(private el: ElementRef, private renderer: Renderer) {
   
      renderer.setElementStyle(el.nativeElement, 'textShadow', '3px 3px 3px rgba(0,0,0,.4)'); 
     // renderer.setElementStyle(el.nativeElement, 'cursor', 'crosshair'); 
      // el.nativeElement.style.backgroundColor = "yellow";
   
     }
     hoverTempColor:string;


    
     @HostListener('mouseover') onMouseOver() { 
       
      //console.log("mouseover");
      let styles = getComputedStyle(this.el.nativeElement);
      this.hoverTempColor = styles.color;
     
      // let part = this.el.nativeElement.querySelector('h4') 
      //this.renderer.setElementStyle(part, 'color', 'red'); 
      this.renderer.setElementStyle(this.el.nativeElement, 'color', '#48d1cc'); 
     }  
     
     
     @HostListener('mouseleave') onMouseLeave() { 
     // console.log("mouseleave");
      // let part = this.el.nativeElement.querySelector('h4') 
      //this.renderer.setElementStyle(part, 'color', 'red'); 
      this.renderer.setElementStyle(this.el.nativeElement, 'color', this.hoverTempColor); 
    }   

}
   
