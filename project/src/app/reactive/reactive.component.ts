import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirm.validator';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles:[`input.ng-invalid{border :5px solid red;}
  input.ng-valid{border-left:5px solid green;}`]
})
export class ReactiveComponent implements OnInit {
  loginForm1= new FormGroup({
    username:new FormControl("hii",[Validators.required]),
    password:new FormControl(),
    cpassword:new FormControl()
  })


  constructor( private userService:UserService, private fb:FormBuilder, private http:HttpClient) { }
ngOnInit():void{

}

  reactiveregister(){
    this.http.post<any>("http://localhost:3000/users",this.loginForm1.value).subscribe(()=>{
      alert("Form Submitted");
    })
  }


}
