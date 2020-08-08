import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DisplayProductsComponent } from './display-products/display-products.component'
import { EditProductComponent } from './product/edit-product/edit-product.component'
  
import { ShowProductComponent } from './show-product/show-product.component';
import { EventsComponent } from './events/events.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: 'dashboard', component: DashComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'productsByCategory/:category', component: DisplayProductsComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'admin', component: NavComponent },

  {
    path:'',
    component: EventsComponent,
  },
  // {
  //   path: 'product', 
  //   component: ShowProductComponent
  // },
  
  {
    path: 'category/:category',
    component: ShowProductComponent,
  },
  {
    path:'events',
    component: EventsComponent
  },
  // {
  //   path:'special',
  //   component: SpecialsComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'fruits',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
