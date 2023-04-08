import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router){}
  canActivateChild(
    childRoute:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):  boolean {
      console.log("can activate child")
      if(!this.loginService.isAdminUser()){
        alert('You are not a admin');
        return false;
      }
      return true;
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      if(!this.loginService.isUserLoggedIn()){
        alert('first login');
        this.router.navigate(["login"],{queryParams:{retUrl:route.url,adminUrl:route.url}});
        return false;
      }
      else{
        return true;
      }

  }

}

