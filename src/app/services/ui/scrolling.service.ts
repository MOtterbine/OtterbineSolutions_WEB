import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScrollingService {


  private scrollMsgSrc = new BehaviorSubject("start");
  curScrollMsg = this.scrollMsgSrc.asObservable();

  constructor(private ngZone: NgZone) { }

  changeMessage(message: string) {
    //console.log("ScrollingService.changeMessage():" + message);
    this.ngZone.run(() => {this.scrollMsgSrc.next(message);});

  }


}