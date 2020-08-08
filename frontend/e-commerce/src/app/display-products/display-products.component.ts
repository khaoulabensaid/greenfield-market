import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  products: Product[];
  constructor(
    private prod: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      console.log(routeParams);
      const category = routeParams.category
      console.log(category)
      this.prod.getProductByCategory(category).subscribe((products) => {
        this.products = products
        console.log('data', products)
      })
    });
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
