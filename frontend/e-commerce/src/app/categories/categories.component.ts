import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any = [];
 
 
  constructor(private apiService: ApiService) { 
    this.readCategory();
   
  }

  input = "jhdfvhjfbk,k,jvhhjfhjjhffqsg"
  ngOnInit(): void { 
    this.apiService.setInput(this.input)
  }
  readCategory(){
    this.apiService.getCategories().subscribe((data) => {
     this.categories = data;
    })  
  }
//   onClick(prod) {
//     this.input = prod.innerText
//     console.log(this.input);
//  }
}

