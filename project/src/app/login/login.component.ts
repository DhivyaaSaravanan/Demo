import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formBuilder:any="";
  username:any="";
  password:any="";
  retUrl:any="home";
  constructor(private loginservice:LoginService,private routes:Router,private router:ActivatedRoute) {
    this.router.queryParams.subscribe(data=>{
      this.retUrl=data['retUrl'];
      console.log(this.retUrl);
    })
  }
  // checkoutForm = this.formBuilder.group;
  ngOnInit() {
     this.router.queryParamMap.subscribe(parama=>{
      this.retUrl=parama.get('retUrl');
      console.log("LoginComponent/ngOnInit",this.retUrl);
     })
  }

  logged(){
    this.loginservice.userLoggedIn(this.username,this.password);
    // if(this.retUrl=="Product"){
    //   this.routes.navigate(['admin']);
    // }
    //   else
    if(this.retUrl!=null){
        this.routes.navigate([this.retUrl]);
      }

}

}


