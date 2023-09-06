/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '@istruzione/shared/registro';
@Component({
  selector: 'istruzione-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
   email = "";
   password = "";
   hide = true;
  constructor(private router:Router,public authService:AuthService){

  }
  ngOnInit(){
    if(this.authService.isLoggedIn) this.router.navigate(['home'])
  }
  signIn(email:string,password:string){
    this.authService.SignIn(email,password)
  }
  verify(){
    console.log(this.email)
    console.log(this.password)
  }
}
