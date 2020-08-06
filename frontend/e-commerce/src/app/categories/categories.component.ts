import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any = [];
  message: string;
 
  constructor(private apiService: ApiService) { 
    // this.readCategory();
   
  }

  
  ngOnInit(): void { 
    // this.apiService.setMessage(this.message)
  }
  readCategory(){
    this.apiService.getCategories().subscribe((data) => {
     this.categories = data;
    
    })  
  }
//   onClick (prod) {
//     this.input = Object.values(prod)[0][22]
//     alert(this.input)
//  }
}

