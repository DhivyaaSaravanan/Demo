import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from '../deactivate.guard';

@Component({
  selector: 'app-userRegistration',
  templateUrl: './userRegistration.component.html',
  styleUrls: ['./userRegistration.component.css']
})

export class UserRegistrationComponent implements IDeactivateComponent {
  username:any="";
  mail:any="";
  constructor() {
    
   }

  ngOnInit() {
  }

  canExit() :boolean{

    console.log("Can Exit Register");
    if(confirm("you are about to leave registration page .press 'yes' to continue")){
      return true;
    }
    else{
    return false;
  }
  }
}
