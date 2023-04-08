import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  chocolate=["Cadbury:Silk"];
  constructor(){
    setInterval(()=>{
      this.chocolate.push("New chocolate:"+Date.now());
    },1000);
  }
}
