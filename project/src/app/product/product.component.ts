import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productList:any='';
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data=>{
      this.productList=data;
    })
  }

}
