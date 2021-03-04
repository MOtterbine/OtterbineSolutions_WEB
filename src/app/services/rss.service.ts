import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';

@Injectable()

export class OSRSSService implements OnInit {

  constructor(private http: HttpClient) { }


  ngOnInit(){

  }


  GetMainFeedObservable(feedUrl: string): Observable<any>{
    return this.http.get("https://api.rss2json.com/v1/api.json?rss_url=" + feedUrl)
                    .pipe(map(res => res), catchError(this.errorHander));
  }

  async GetMainFeedPromise(feedUrl: string): Promise<any> {
    return this.http.get("https://api.rss2json.com/v1/api.json?rss_url=" + feedUrl).toPromise();
  }

  // async GetMainFeedPromise(feedUrl: string): Promise<any> {
  //   return this.http.get("https://api.rss2json.com/v1/api.json?rss_url=" + feedUrl)
  //       .toPromise().then(response => response);
  // }

  errorHander(errorResponse: HttpErrorResponse){
    if(errorResponse instanceof ErrorEvent){
      console.log("client-side error: " + errorResponse.message);
    }
    else{
      console.log("Server-side error: " + errorResponse.message);
    }
    return throwError('There is a problem with the service');
  }

}