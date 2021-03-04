import {   Component, AfterViewInit, AfterContentInit } from '@angular/core';
import { UIString } from 'src/app/os-common';
import { MenuService } from 'src/app/services/menu/os-menu.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'os-header',
  templateUrl: './os-header.component.html',
  styleUrls: ['./header.less', "../pages/pages.less"]
})

export class OsHeaderComponent implements AfterViewInit, AfterContentInit{

  bannerTitle = UIString.BANNER_TITLE_1;

  constructor(public _authService:AuthService) {

  }

  ngAfterViewInit(){

  }

  headerLogoSource:string;

  ngAfterContentInit(){
   // console.log("header start");
    var rnd = Math.random();
    //console.log("rnd:" + rnd);
    if(rnd > .49999){
      this.headerLogoSource = "./assets/images/MOLogo_sm.png";
     // this.headerLogoSource = "./assets/images/ThoughtPillRed.png";
     // console.log("Red start");
    }
    else {
      this.headerLogoSource = "./assets/images/MOLogo_sm.png";
      //this.headerLogoSource = "./assets/images/ThoughtPillBlue.png";
     // console.log("Blue start");
    }
    $(window).trigger("resize");

  }

  ToggleNavBar = () =>{

    $("#sidebar-wrapper").toggleClass("active");


  }
  CloseMenu = () =>{

    $("#sidebar-wrapper").removeClass("active");


  }
}

