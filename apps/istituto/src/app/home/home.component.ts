/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, DocenteService } from '@istruzione/shared/registro';
import { AuthService } from '@istruzione/shared/registro';
import { NgxSpinnerService } from 'ngx-spinner';

const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));
@Component({
  selector: 'istruzione-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'
             ],
})

export class HomeComponent implements OnInit{
  utenti:any;
  selected=0;
  showFiller= false;
  type: any;
  email:string="";
  mobile:boolean = false;
  showmenu:boolean = true;

  constructor (private spinner:NgxSpinnerService, private alunni:AlunniBackService,private docente:DocenteService,private router:Router,private auth:AuthService){}
  async ngOnInit(){
    this.spinner.show();
    await new Promise(res => setTimeout(res, 2000));
    this.spinner.hide();
    
    if (window.screen.width < 760) {
      this.mobile = true;
      this.showmenu = false;
    }
    this.email=(JSON.parse(localStorage.getItem('user')!)?.email)
    if (!this.email) {
      this.router.navigate(['login']);
    return;
    }
    else{
      const u = this.alunni.getUserByEmail(this.email);
      u.then(user=>{
        if(user){
          localStorage.setItem('utente',JSON.stringify(user));
        }
      })
    }
   
  const role = await this.alunni.getUserRole(this.email);
  if (role === 'alunno') {
    this.router.navigate(['home/alunno']);
  }

  if (role === 'docente') {
    this.router.navigate(['home/docente']);
  }

  }
  goType(){
      if(JSON.parse(localStorage.getItem('user')!).tipo==1) {this.router.navigate(['home/alunno/'])}
      else this.router.navigate(['home/docente'])
  }
  logOut(){
    this.auth.SignOut()
  }
  goTo(scelta:number){
    this.selected=scelta;
    switch (scelta) {

      case 0: this.goType();  break;
      case 1: this.router.navigate(['home/registro']); break;
      case 2: this.router.navigate(['home/compiti']);  break;
      case 3: this.router.navigate(['home/docente']);  break;
      case 4: this.router.navigate(['home/pagelle']);  break;
      case 5: this.router.navigate(['home/corsi']);  break;
      case 6: this.router.navigate(['home/docente/gestionealunni']);  break;
      case 7: this.router.navigate(['home/docente/gestionedocenti']);  break;
      case 8: this.router.navigate(['home/docente/gestionecorsi']);  break;
      default: break;
    }
  }
  ShowMenu(){
    this.showmenu= !this.showmenu;
  }
}
