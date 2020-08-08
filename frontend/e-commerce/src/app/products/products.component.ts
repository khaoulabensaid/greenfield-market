import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private prod: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.prod.getProducts().subscribe(
      (products) => {
        this.products = products;
        console.log(this.products);
      },
      (error) => {
        alert('error');
      }
    );
  }
  deleteItem(i) {
    this.prod.deleteProduct(this.products[i].name).then(() => {
      this.router.navigate(['products']);
    });
  }
  navigation(){
    this.router.navigate(['edit-product'])
  }
}
