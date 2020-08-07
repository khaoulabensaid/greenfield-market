import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowProductComponent } from './show-product/show-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { EventsComponent } from './events/events.component'; 
import { SpecialsComponent } from './specials/specials.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {
    path:'',
    component: EventsComponent,
  },
  {
    path: 'product', 
    component: ShowProductComponent
  },
  {
    path: 'category', 
    component: CategoriesComponent
  },
  {
    path: 'category/:category',
    component: ShowProductComponent,
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'special',
    component: SpecialsComponent,
    canActivate: [AuthGuard]
  },
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
