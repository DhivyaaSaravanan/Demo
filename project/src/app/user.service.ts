import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

constructor(private client:HttpClient) { }

 addUserInformation(body:any){
   return this.client.post("http://localhost:3000/users",body);
 }
 addreactiveInfo(body1:any){
  return this.client.post("http://localhost:3000/users",body1);
 }
}
