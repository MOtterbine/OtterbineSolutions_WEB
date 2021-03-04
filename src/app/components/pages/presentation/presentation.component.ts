import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { BasePageComponent } from '../os-basepage.component';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent extends BasePageComponent implements OnInit, AfterViewInit {

  constructor(private _auth:AuthService, private _router:Router) {
    super();
    $(document).prop("title", "Otterbine Solutions | Mike Otterbine | ODB2 Application Download")
  }

  ngOnInit() {
    super.ngOnInit();
  }



  ngAfterViewInit() {
    super.ngAfterViewInit();

    if(!this._auth.loggedIn()) {
      this._router.navigate(["/login"]);
    }
    this._auth.callApi({ operation: 'verifytoken', userData:{'email':'', 'passhash':'', 'authorization': 'Bearer ' + this._auth.getToken()}})
    .then(response=> {
      console.log("Info:",response.status);
      switch(response.status) {
        case 200:
          break;
        case 403:
        case 401:
        default:
              this._router.navigate(["/login"]);
            break;
      }
    });
  }
}
