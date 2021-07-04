import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { LoginService } from "../services/login.service";
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector : Injector) { }

  intercept(req:any,next:any){
    let authService=this.injector.get(LoginService)
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Token ${authService.getToken()}`
      }
    })

    return next.handle(tokenizedReq)
  }
}