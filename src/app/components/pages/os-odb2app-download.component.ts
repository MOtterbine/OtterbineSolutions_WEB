import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BasePageComponent } from './os-basepage.component';

@Component({
  selector: 'app-os-odb2app-download',
  templateUrl: './os-odb2app-download.component.html',
  //styleUrls: ['pages.less']//'./os-odb2app-download.component.less']
  styleUrls: [ './os-odb2app-download.component.less']
})
export class ODB2AppDownloadComponent extends BasePageComponent implements OnInit, AfterViewInit {


  constructor(private _auth:AuthService, private _router:Router) {
    super();
    $(document).prop("title", "Otterbine | Mike's ODB2 Windows Application")
   }

  ngOnInit():void {


  }

ngAfterViewInit() {
    super.ngAfterViewInit();
      // this._auth.callApi({ operation: 'verifytoken', userData:{'email':'', 'passhash':''}})
      //      .subscribe(res=>{
      //                         //console.log("No Error: Token Verified:", res);
      //                       },
      //                 err=>{
      //                  console.log("Error:",err);
      //                  if(err) {
      //                     this._router.navigate(["/login"]);
      //                  }
      //                 });

}}
