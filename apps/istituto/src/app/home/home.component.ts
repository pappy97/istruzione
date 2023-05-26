/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, DocenteService } from '@istruzione/shared/registro';
import { AuthService } from '../auth.service';

@Component({
  selector: 'istruzione-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  utenti:any;
  selected=0;
  showFiller= false;
  type: any;
  constructor (private alunni:AlunniBackService,private docente:DocenteService,private router:Router,private auth:AuthService){}
  ngOnInit(){
    if(this.alunni.getAlunnobyEmail(JSON.parse(localStorage.getItem('user')!).email)!==undefined) {
      localStorage.setItem('utente',JSON.stringify(this.alunni.getAlunnobyEmail(JSON.parse(localStorage.getItem('user')!).email)))
      this.router.navigate(['home/alunno/'])}
      else
      {
        localStorage.setItem('utente',JSON.stringify(this.docente.getDocenteByEmail(JSON.parse(localStorage.getItem('user')!).email)))
        this.router.navigate(['home/docente'])
      }

  }
  goType(){
      if(JSON.parse(localStorage.getItem('utente')!).type==1) {this.router.navigate(['home/alunno/'])}
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
      case 3: this.router.navigate(['home/docenti']);  break;
      case 4: this.router.navigate(['home/pagelle']);  break;
      case 5: this.router.navigate(['home/corsi']);  break;
      case 6: this.router.navigate(['home/alunni']);  break;
      case 7: this.router.navigate(['home/classi']);  break;
      default: break;
    }
  }
}
