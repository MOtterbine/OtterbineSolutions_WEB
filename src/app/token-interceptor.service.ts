import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';





@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor {

  constructor(private injector:Injector) {


   }


  intercept(req, next) {
    console.log("Interceptor Start...");

     return next.handle(req.clone());//.handle(req.clone());
  }


}
