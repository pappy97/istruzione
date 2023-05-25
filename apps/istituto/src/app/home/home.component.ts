/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, RetriveDBService, UsersService } from '@istruzione/shared/registro';
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
  constructor (private db:RetriveDBService,private users:UsersService, private alunni:AlunniBackService,public router:Router,private auth:AuthService){}
  ngOnInit(){
    this.db.retrivedb()
    this.users.getUsers().subscribe((data:any)=>{
      localStorage.setItem("users",JSON.stringify(data))
    })
    let a=this.users.getType(JSON.parse(localStorage.getItem('user')!).email);
    a.forEach(doc=>{
      doc.forEach((c:any)=>{
        localStorage.setItem("utente",JSON.stringify(c.data()))
      this.type=c.data().type;
      if(this.type==1) {this.router.navigate(['home/alunno/'])}
      else this.router.navigate(['home/docente'])
      })
    })

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
