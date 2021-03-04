import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { Json } from 'aws-sdk/clients/robomaker';
import { utf8Encode } from '@angular/compiler/src/util';


declare var CryptoJS:any;
var ang = CryptoJS;
//declare var getSignatureKey:any;

const region = "us-east-2";
const service = "execute-api";
const algorithm = "AWS4-HMAC-SHA256";

// VJ
var sysAc = "AKIA5RBZPGSFKKOYOV5N";
var usac = encodeURI("ItE5Bda0kN2L1/S6Mc3Q5D4mW6E1wjvM+q2+SliR");

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private apiUrl = "https://o06m0kkh4h.execute-api.us-east-2.amazonaws.com/default";

  private pswdResetUrl = "https://www.otterbinesolutions.com/40147AF6-0E4A-4954-919C-5647A1E64C5A.php";

  constructor(private http:HttpClient, private _router:Router ) {

    // let it = fetch("./cgi-bin/test.php")
    //   .then(data=>{
    //     console.log("Fetched",data);
    //   });

  }

  pad(num:number, size:number) {
    var sNum = num.toString();
    while (sNum.length < size) sNum = "0" + sNum;
    return sNum;
  }

  getSignatureKey = (key, dateStamp, regionName, serviceName) => {
    var kDate = ang.HmacSHA256(dateStamp, "AWS4" + key);
    var kRegion = ang.HmacSHA256(regionName, kDate);
    var kService = ang.HmacSHA256(serviceName, kRegion);
    var kSigning = ang.HmacSHA256("aws4_request", kService);
    return kSigning;
  }

  IAMAuthSignRequest(payload) {
    let payloadHash = String(ang.SHA256(payload));

    // DATE AND TIME
    let now = new Date();
    let dateStamp = now.getUTCFullYear() + this.pad((now.getUTCMonth() +1),2) + this.pad(now.getUTCDate(),2);
    let reqDate = dateStamp + "T" + this.pad(now.getUTCHours(), 2) + this.pad(now.getUTCMinutes(), 2) + this.pad(now.getUTCSeconds(), 2) + "Z";

    let HTTPRequestMethod = "POST";
    let CanonicalURI = "/default";
    let CanonicalQueryString = "";
    let CanonicalHeaders =  "content-type:application/json;charset=utf-8\n" +
                            "host:" + "o06m0kkh4h.execute-api.us-east-2.amazonaws.com" +"\n" +
                            "x-amz-date:" + reqDate + "\n";
    let SignedHeaders = "content-type;host;x-amz-date";
    let CredentialScope = dateStamp + "/" + region + "/" + service + "/aws4_request";
    let CanonicalRequest =
      HTTPRequestMethod + '\n' +
      CanonicalURI + '\n' +
      CanonicalQueryString + '\n' +
      CanonicalHeaders + '\n' +
      SignedHeaders + '\n' +
      payloadHash;

    let StringToSign = algorithm + "\n" +
      reqDate + "\n" +
      CredentialScope + "\n" +
      ang.SHA256(CanonicalRequest);

    // console.log("StringToSign:","\n" + StringToSign + "\n");

    let derivedSigningKey = this.getSignatureKey(usac,dateStamp,region,service);

    let signature =  ang.HmacSHA256(StringToSign, derivedSigningKey );

    let finalAuthHeader = algorithm + " Credential=" + sysAc + "/" + CredentialScope +
                                                        ", SignedHeaders=" + SignedHeaders + ", Signature=" + signature;

    return {
      'x-amz-date':reqDate,
      'Accept': 'application/json',
      'content-type': 'application/json;charset=utf-8',
      'Authorization': utf8Encode(finalAuthHeader)
    };
  }

  private async sendApiRequest(bodyData:any):Promise<any> {

     //return this.http.post<string>(this.apiUrl, bodyData, { headers: setHeaders}).toPromise();

    //  return this.http.post(this.apiUrl, bodyData,
    //         { headers: setHeaders, withCredentials:false, responseType:'json', reportProgress:false}).toPromise();



    // await $.ajax({
    //   type: "POST",
    //   contentType: "application/json",
    //   url: this.apiUrl,
    //   data: bodyData,
    //   //context: document,
    //   processData:false,
    //   dataType:"json",
    //   crossDomain:true,
    //   headers:setHeaders,
    //   success:res=>{
    //     return new Promise(res);
    //   },
    //   error:errr=>{
    //     return new Promise(null);
    //   }
    // });



    const otherParam={
        method:'POST',
        url: this.apiUrl,
        contentType:"application/json;charset=utf-8",
        body: bodyData,
        headers: this.IAMAuthSignRequest(bodyData)
    };

    return fetch(this.apiUrl, otherParam);

  }

  callApi(userData:any): Promise<any> {
    return this.sendApiRequest(JSON.stringify(userData));
  }

  sendPasswordResetEmail(userEmailAddress:string, resetUrl:string):Observable<any> {

    console.log("Calling sendPasswordResetEmail:", userEmailAddress);

    return this.http.post<any>(this.pswdResetUrl, {
      // "Email":userEmailAddress,
      "Email":'mikeotterbine@gmail.com',
      "subject":"Password Reset Confirmation",
      "Message":"This email is in response to a request to reset the password for your login to Otterbine Solutions. Click <a href='" + resetUrl + "'>here</a> to change your password."
    });

  }

  sendRegistrationConfirmationEmail(userEmailAddress:string, regConfirmUrl:string) {

    //console.log("Calling sendRegistrationConfirmationEmail:", userEmailAddress);




    return this.http.post<any>(this.pswdResetUrl, {
      // "Email":userEmailAddress,
      "Email":'mikeotterbine@gmail.com',
      "subject":"Registration Confirmation",
      "Message": userEmailAddress + ".<br>Thank you for signing up at OtterbineSolutions.com. Please, confirm your registration by clicking <a href='" + regConfirmUrl + "'>here</a> ."
    });

  }

  logoutUser() {
    localStorage.removeItem('token');
    //this._router.navigate(["/"]);

  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}