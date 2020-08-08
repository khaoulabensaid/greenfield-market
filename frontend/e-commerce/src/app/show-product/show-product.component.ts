import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { MessengerService } from '../service/messenger.service';
import { CartService } from '../service/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
})
export class ShowProductComponent implements OnInit {
  products:any = [];
  constructor(private apiService: ApiService, private activeRoute: ActivatedRoute) { 
  }
  ngOnInit(): void { 
    this.activeRoute.params.subscribe(routeParams => {
      console.log(routeParams);
      const category = routeParams.category
      this.apiService.getProducts(category).subscribe((data) => {
        this.products = data;
        console.log('data', data);
      });
    });
  }
  // handleAddToCart() {
  //   this.cartService.addProductToCart(this.productItem).subscribe(() => {
  //     this.msg.sendMsg(this.productItem);
  //   });
  // }
}
