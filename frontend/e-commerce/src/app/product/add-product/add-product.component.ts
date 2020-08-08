import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private add: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  name: string = '';
  price: number;
  category: string = '';
  quantity: number;
  photoUrl: string = '';

  addProduct(){
    this.add.createNewProduct(this.name, this.price, this.category,this.quantity, this.photoUrl).then(
      () => {
        this.router.navigate(['products']);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }
  returnToListing() {
    this.router.navigate(['products'])
  }
}
