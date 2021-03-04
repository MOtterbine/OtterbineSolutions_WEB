import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth:AuthService, private _router:Router) {

  }

  canActivate() {
    if(this._auth.loggedIn()) {
      return true;
    }
    this._router.navigate(["/login"]);
    return false;

  }
}
