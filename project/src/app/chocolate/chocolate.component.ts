import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chocolate',
  templateUrl: './chocolate.component.html',
  styleUrls: ['./chocolate.component.css']
})
export class ChocolateComponent implements OnInit ,OnChanges{
   @Input() attribute:any="";
  constructor() { }

  ngOnInit() {
  }
ngOnChanges(changes: SimpleChanges): void {
    console.log("The chocolate datas uploaded");
}
}
