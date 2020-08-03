import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Category:any = [];
  
  
  constructor(private apiService: ApiService) { 
    this.readCategory();
  }

  
  ngOnInit(): void { }
  readCategory(){
    
    this.apiService.getCategories().subscribe((data) => {
     this.Category = data;
     console.log(this.Category);
    })  
  }

}
