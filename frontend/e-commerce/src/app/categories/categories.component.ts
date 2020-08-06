import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:any = [];
  private input : string;
 
  constructor(private apiService: ApiService) { 
    this.input = ""
    this.readCategory();
  }

  
  ngOnInit(): void { }
  readCategory(){
    this.apiService.getCategories().subscribe((data) => {
     this.categories = data;
    })  
  }
  onClick (prod) {
    this.input = Object.values(prod)[0][22]
    alert(this.input)
 }
}

