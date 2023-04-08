import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-proDetailed',
  templateUrl: './proDetailed.component.html',
  styleUrls: ['./proDetailed.component.css']
})
export class ProDetailedComponent implements OnInit {

  constructor(private service:ProductService,private route:ActivatedRoute) { }
finalProduct:any="";
productList:any="";
searchFor:any="";
  ngOnInit() {
    this.service.getProducts().subscribe(data=>{
      this.productList=data;

      this.route.params.subscribe(paramdata=>{
        this.searchFor=paramdata['check'];
        for(let product of this.productList)
        {
          if(product.title==this.searchFor)
          {
            this.finalProduct=product;
            break;
          }
        }
      })
    })

}}
