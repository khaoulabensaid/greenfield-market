import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProductComponent } from './show-product/show-product.component';
import { CategoriesComponent } from './categories/categories.component'
const routes: Routes = [
  {path: 'product', component: ShowProductComponent},
  {path: 'category', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
