import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:{first_name : string, last_name : string, address : string, mobile1 : string, mobile2 : string, email : string, password : string} = {first_name:"",last_name:"",address:"",mobile1:"",mobile2:"",email : "", password:"" }
  constructor(private _auth:AuthService,
              private _router: Router ) { }

  ngOnInit(): void {
  }
  registerUser () {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res),
        localStorage.setItem('token', res.token)
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    )
  }

}
