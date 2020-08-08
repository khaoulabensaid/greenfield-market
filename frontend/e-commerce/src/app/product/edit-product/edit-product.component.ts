import { Component, OnInit } from '@angular/core';
import {ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router} from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
// product= new Product();
  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }
  name: string = '';
  price: number;
  category: string = '';
  quantity: number;
  photoUrl: string = '';
  item = {name: this.name,price: this.price, category: this.category, quantity: this.quantity, photoUrl: this.photoUrl}
  editItem(){
    this.productService.editProduct(this.item)
    .subscribe((data) => {
      this.item = data
      this.router.navigate(['products']);
    })
  }
}
