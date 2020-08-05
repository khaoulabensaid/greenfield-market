import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  products:any = [];
  input : string;
  constructor(private apiService: ApiService) { 
  
    // this.readProduct();
   
  }

  ngOnInit(): void {
   this.input = this.apiService.getInput();
   console.log(this.input);
   
  }
  // readProduct(){
  //   this.apiService.getProducts(this.input).subscribe((data) => {
  //    this.products = data;
  //    console.log(this.input);
  //   })  
  // }

}
