import { Component, OnDestroy, OnInit, HostBinding, AfterViewInit } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
import { sha512 } from 'js-sha512';

import { BasePageComponent } from '../../pages/os-basepage.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { deregAll } from '@uirouter/core';
import { cleanData } from 'jquery';
import { Authorizers } from "../Authorizers";





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent extends BasePageComponent implements OnInit, OnDestroy, AfterViewInit {

  isProcessing:boolean = false;
  messageText = "";
  messageTextClasses = "text-danger"

  loginUserData = {email:"",password:""};
  isValidated:boolean = false;
  private apiUrl = "https://o06m0kkh4h.execute-api.us-east-2.amazonaws.com/default/";

  constructor(private _auth:AuthService, private _router:Router) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.loginUserData = null;
  }

  ngAfterViewInit() {
   super.ngAfterViewInit();
  //  console.log("ngAfterViewInit...");
  }

  async sendPasswordResetEmail() {
    this.messageTextClasses = "text-info";
    this.messageText = "Processing...";

    this.isValidated = false;
    this.isProcessing = true;

    let email = this.loginUserData.email;
    //let passwordHash =  sha512.create().update(this.loginUserData.password).hex();

    var userData0 ={
      "operation":"userexists",
      "userData": {"email":email,"passhash":""}
    };
    let response = await this._auth.callApi(userData0)
        .catch(error=>{
            console.log("Error:",error);
            this.messageTextClasses = "text-danger";
            this.messageText = "Server is currently unavailable";// err.statusText";
            // this.loginUserData = {email:"",password:""};
             this.isProcessing = false;
            this.validate();
            return;
          });

       switch(response.status) {
        case 200:

           let emResponse = await this._auth.sendPasswordResetEmail(this.loginUserData.email, "https://otterbinesolutions.com/register")
           .toPromise()
          .catch(error=>{
            console.log("Error:",error);
            this.messageTextClasses = "text-danger";
            this.messageText = "Server is currently unavailable";// err.statusText";
            // this.loginUserData = {email:"",password:""};
             this.isProcessing = false;
            this.validate();
            return;
          });
          // console.log("emResponse:", emResponse);
          // switch(emResponse.status) {
          //   case 200:
              this.messageText = "A password reset link has been sent to " + this.loginUserData.email;
              this.messageTextClasses = "text-info";
          //     break;
          //   default:
          //     this.messageText = "This email, " + this.loginUserData.email + " is not registered.";
          //     this.messageTextClasses = "text-info";
          //     break;
          // }
            break;
        default:
          console.log("Error:",response.status);
          this.messageText = "This email, " + this.loginUserData.email + " is not registered.";
          this.messageTextClasses = "text-info";
        break;
      }
      console.log("result:", response.status);
      this.validate();
      this.isProcessing = false;

  }




  sendPasswordResetEmail1() {
    this.isProcessing = true;



    // this._auth.callApi({ 'operation': 'userexists', 'userData':{'email':this.loginUserData.email, 'passhash':""}})
    //   .then(body=>{
    //                 //console.log("next:", body)
    //                 console.log("User exists");
    //                 this._auth.sendPasswordResetEmail(this.loginUserData.email, "https://otterbinesolutions.com/register")
    //                   .subscribe(body=>{

    //                                       //this._router.navigate(["/"])

    //                                     },
    //                                     err=>{
    //                                       if(err.status == 200) {
    //                                         this.messageText = "A password reset link has been sent to " + this.loginUserData.email;
    //                                         this.messageTextClasses = "text-info";
    //                                        //   this._router.navigate(["/"])
    //                                       }

    //                                       //console.log("Response:",resp)
    //                                       this.isProcessing = false;
    //                                     },
    //                                     ()=>{
    //                                       this.isProcessing = false;
    //                                     });
    //                 },
    //                 err=>{
    //                   //console.log("Error:", err);
    //                   if(err.status == 401) {
    //                       this.messageText = "This email, " + this.loginUserData.email + " is not registered.";
    //                       this.messageTextClasses = "text-info";



    //                   // console.log("User doesn't exist");
    //                   } else {
    //                   //  console.log("Server Error:", err);

    //                   }
    //                  this.isProcessing = false;
    //                 });

    //alert("A password reset link has been sent to " + this.loginUserData.email);

    // this._auth.sendPasswordResetEmail(this.loginUserData.email, "https://www.otterbinesolutions.com")
    //   .subscribe(Next=>{ console.log("next:", Next) },resp=>{
    //     if(resp.status == 200) {

    //       alert("A password reset link has been sent to " + this.loginUserData.email);
    //       this._router.navigate(["/"])
    //     }
    //     //console.log("Response:",resp)
    //   });
  }



  async loginUser() {
    this.messageTextClasses = "text-info";
    this.messageText = "Logging in...";

    this.isValidated = false;
    this.isProcessing = true;

    let email = this.loginUserData.email;
    let passwordHash =  sha512.create().update(this.loginUserData.password).hex();

    var userData0 ={
      "operation":"login",
      "userData": {"email":email,"passhash":passwordHash}
    };

    let response = await this._auth.callApi(userData0).catch(error=>{
            console.log("Error:",error);
            this.messageTextClasses = "text-danger";
            this.messageText = "Server is currently unavailable";// err.statusText";
            // this.loginUserData = {email:"",password:""};
            localStorage.removeItem("token");
            this.isProcessing = false;
            this.validate();
          });
    if(response != undefined) {
       switch(response.status) {
        case 200:
          var uToken = null;
          // get the token

          console.log("Login Response:", response);
          response.json()
              .then(bodyObj=>{
                uToken = bodyObj.token;
             //   console.log("uToken:",uToken);
                this.messageTextClasses = "text-success";
                this.messageText = "Login Successful";
             //   let newTokenValue = {token: uToken,
                //                  'user': this.loginUserData.email};
              localStorage.setItem("token", uToken);
              this.loginUserData.password="";
              this.loginUserData.email="";
              this._router.navigate(["/Home"]);
              })
              .catch(error=>{
                console.log("Error:",error +"\n");
                this.messageTextClasses = "text-danger";
                this.messageText = "Server error";// err.statusText";
                // this.loginUserData = {email:"",password:""};
                localStorage.removeItem("token");
                this.isProcessing = false;
                this.validate();
              });


          break;
        case 403:
         // console.log("Error:",response.status);
          this.messageTextClasses = "text-danger";
          this.messageText = "Server is currently unavailable";
          // this.loginUserData = {email:"",password:""};
          this.loginUserData.password="";
          localStorage.removeItem("token");
          break;
        case 401:
        default:
        //  console.log("Error:",response.status);
            this.messageTextClasses = "text-info";
            this.messageText = "Login Failed";// err.statusText";
            // this.loginUserData = {email:"",password:""};
            localStorage.removeItem("token");

            break;
      }
    }
    //  console.log("result:", response.status);
      this.validate();
      this.isProcessing = false;

     }


  validate() {
    if(this.loginUserData.email.length>0 && this.loginUserData.password.length>0) {
       this.isValidated = true;
      return;
    }
    this.isValidated = false;
  }

}
