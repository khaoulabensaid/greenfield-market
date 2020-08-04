import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';

import { importExpr } from '@angular/compiler/src/output/output_ast';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialsComponent } from './specials/specials.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'
import { TokenIntercepterService } from './token-intercepter.service'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    EventsComponent,
    SpecialsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService , AuthGuard,EventService,{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenIntercepterService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
