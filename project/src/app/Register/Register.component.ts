import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
 styles:['input.ng-invalid{border:2px solid red}','input.ng-valid{border:2px solid green}']
})
export class RegisterComponent implements OnInit {

  username:any="";
  mobileno:any="";
  emailid:any="";
  constructor(private userService: UserService) { }

  ngOnInit() {
  }


   submitForm(){
    var body={
      uname:this.username,
      mobile:this.mobileno,
      email:this.emailid
    }
   this.userService.addUserInformation(body).subscribe(data=>{
    alert("form submitted");
   })
   }
}

