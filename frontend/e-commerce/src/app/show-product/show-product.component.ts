import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  products:any = [];

  constructor(private apiService: ApiService) { 
    this.readProduct();
  }

  ngOnInit(): void {
  }
  readProduct(){
    this.apiService.getProducts().subscribe((data) => {
     this.products = data;
    })  
  }

}
