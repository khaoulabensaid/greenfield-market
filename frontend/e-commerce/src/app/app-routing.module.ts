import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DisplayProductsComponent } from './display-products/display-products.component'
import { EditProductComponent } from './product/edit-product/edit-product.component'
const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'productsByCategory/:category', component: DisplayProductsComponent },
  { path: 'edit-product', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
