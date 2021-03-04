import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { Mongoose } from 'mongoose';
//import { AuthService } from 'src/app/services/auth/auth.service';
import { BasePageComponent } from '../../pages/os-basepage.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { sha512 } from 'js-sha512';
import { encode } from 'punycode';


declare var CryptoJS:any;
let ang = CryptoJS;
//declare var process1:any;
//declare var process2:any;
const serviceaddress = "A7014AAC336EB24C16AAE4F0A58D9A9037BC";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent extends BasePageComponent implements AfterViewInit {

  registrationComplete:boolean = false;
   messageText = "";
  messageTextClasses = "text-danger"
  registerUserData = {email:"",password:""};

  constructor(private _auth:AuthService, private _router:Router, private route:ActivatedRoute) {
    super();
  }

  async registerUser() {
    this.isValidated = false;

    this.messageTextClasses = "text-info";
    this.messageText = "Registering...";
    let email = this.registerUserData.email;
    let passwordHash =  sha512.create().update(this.registerUserData.password).hex();

    var apiUserData ={
      "operation":"register",
      "userData": {"email":email,"passhash":passwordHash, "registerDate":new Date()}

    };

    let response = await this._auth.callApi(apiUserData)
      .catch(error=>{
        console.log("Error:",error);
        this.messageTextClasses = "text-danger";
        this.messageText = "Server Unavailable";// err.statusText";
        localStorage.removeItem("token");
        this.validate();
      });

    switch(response.status) {
      case 200:
      //  var uToken = null;
        // get the token
       // let bodyObj = response.json();


        let processOutput = encodeURIComponent(ang.AES.encrypt(email + "|" + this.GetDateTimeString(), serviceaddress).toString());
        //console.log("crypted:", processOutput)

        await this._auth.sendRegistrationConfirmationEmail(this.registerUserData.email, "https://otterbinesolutions.com/register?id=" + processOutput)
          .toPromise()
          .then(response=>{

            this.messageTextClasses = "text-success";
            this.messageText = "Registration started Successfully. An email with a confirmation link will be sent to " + this.registerUserData.email + ".";

            this.registerUserData.password="";
            this.registrationComplete = true;

          })
          .catch(error=>{
            console.log("Error:",error);
            this.messageTextClasses = "text-danger";
            this.messageText = "Email Server is currently unavailable";// err.statusText";
            this.validate();
            return;
          });
          // console.log("responseem",responseem);
          // if(responseem != undefined) {
          //   switch(responseem.status){
          //   case 200:
              // this.messageTextClasses = "text-success";
              // this.messageText = "Registration started Successfully. An email with a confirmation link will be sent to " + this.registerUserData.email + ".";

              // this.registerUserData.password="";
              // this.registrationComplete = true;
          //     break;
          //   default:
          //     break;
          //   }
          // }
        // console.log("emResponse:", emResponse);
        // switch(emResponse.status) {
        //   case 200:


        break;
      case 409:

        let jack1 = response.json()
          .then(bodyObj=>{

          //  console.log("bodyObj:",bodyObj);
            this.messageTextClasses = "text-warning";
            this.messageText = bodyObj;
            //   let newTokenValue = {token: uToken,
            //                  'user': this.loginUserData.email};
            localStorage.removeItem("token");
            this.registerUserData.password="";
          });;


        break;
      case 403:
        console.log("Error:",response.status);
        this.messageTextClasses = "text-danger";
        this.messageText = "Server is currently unavailale";
        this.registerUserData.password="";
        localStorage.removeItem("token");
        break;
      case 502: // Likely an error in the service code (502: bad gateway)
        console.log("Error:",response.status);
        this.messageTextClasses = "text-danger";
        this.messageText = "Service Error - Registration Failed";
        localStorage.removeItem("token");
      break;
      case 401:
      default:
        console.log("Error:",response.status);
          this.messageTextClasses = "text-danger";
          this.messageText = "Registration Failed";// err.statusText";
          localStorage.removeItem("token");

          break;
    }
    this.validate();

  }

  ngAfterViewInit() {

    super.ngAfterViewInit();

    //console.log("After view init...");

    this.route.queryParams
      .subscribe(d=>{

        if(d.id){
          this.registrationComplete = true;
         // console.log("Param ID (in):", d.id); // pop

         let inputString = ang.AES.decrypt(decodeURIComponent(d.id), serviceaddress).toString(ang.enc.Utf8).split(['|']);
         let emailString =inputString[0];

          console.log("param: ID (out)", emailString, "Date and TIme:", inputString[1] );



          var apiUserData ={
            "operation":"createuser",
            "userData": {"email":emailString,"passhash":""}
          };

          this._auth.callApi(apiUserData)
            .then(response=>{
            //  console.log("Created User",response);
              switch(response.status) {
                case 200:
                  $(".form-group").css('visibility', "hidden");
                  $(".card-body .regmessage").html("<br>You are now a registered user.<br><br><p><b>Thanks again!!!</b> from the team at Otterbine Solutions</>")
                  break;
                case 409:
                  $(".form-group").css('visibility', "hidden");
                  $(".card-body .regmessage").html("<br>You are already registered!<br><br><b>Thanks again</b><br><br>from the team at Otterbine Solutions</>")
                  break;
                default:
                  break;
              }
            })
            .catch(error=>{
              console.log("Error:",error);
              $(".form-group").css('visibility', "hidden");
              $(".card-body .regmessage").addClass("text-danger");
              $(".card-body .regmessage").html("<br>Server Error...</>")
              //localStorage.removeItem("token");
              this.validate();
            });




        }

      });

  }

  isValidated:boolean = false;

  validate() {
    if(this.registerUserData.email.length>0 && this.registerUserData.password.length>0) {
    //  $("button").removeClass("ui-state-disabled");
      this.isValidated = !this.registrationComplete;
      return;
    }
    this.isValidated = false;

  //  $("button").addClass("ui-state-disabled");

  }

}
