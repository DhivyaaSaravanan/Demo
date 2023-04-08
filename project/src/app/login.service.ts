import { Injectable } from '@angular/core';
import {of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

   username:any="";
   password:any="";
   isLoggedIn:boolean=false;
  constructor() { }

  userLoggedIn(u:any,p:any){
  this.username=u;
  this.password=p;
  this.isLoggedIn=true;

}

isUserLoggedIn():boolean{
  return this.isLoggedIn;
}

userLogOut():void{
  this.isLoggedIn=false;
}

isAdminUser():boolean{
  console.log("un"+this.username)
  if(this.username="admin"){
    return true;
  }
  return false;
}
}
