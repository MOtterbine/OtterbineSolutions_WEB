import { Injectable, NgZone } from '@angular/core';

import { Observable, interval, pipe } from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class DocumentService {

  constructor(private http:HttpClient, private ngZone: NgZone ) {}


async GetJSONString(url: string): Promise<any> {

  // the timestamp ensures we don't get a cached result.
  let timeStamp = +new Date();
  let uniqueUrl = url + '?tsp=' + timeStamp;
  return this.ngZone.run(() => this.http.get(uniqueUrl).toPromise().then(response => response));
}




dummyFunction = (input:any):any =>{
   console.log("dummyFunction(%s)", input);
  // console.log("input: " + input);
  return "dummyFunction";
}


getXMLWithObservable = (): Observable<string[]> => {
  return this.ngZone.run(() => this.http.get("otterbinesolutions.com").pipe(
    map(m=> m),d=>this.dummyFunction(d) ));
}






}