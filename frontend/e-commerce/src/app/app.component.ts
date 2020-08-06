import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories:any = [];
  title = 'e-commerce';

  constructor(public _authService: AuthService,
              private _apiService:ApiService){
                this.readCategory();
              }

  readCategory(){
    this._apiService.getCategories().subscribe((data) => {
     this.categories = data;
    })  
  }
}
