import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, ComunicazioneService, DocenteService } from '@istruzione/shared/registro';
import { AuthService } from '@istruzione/shared/registro';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';

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
  role ='';
  type: any;
  email="";
  mobile = false;
  showmenu = true;
  private subscription!: Subscription;
  private destroyer = inject(DestroyRef);

  constructor (private spinner:NgxSpinnerService, private alunni:AlunniBackService,private docente:DocenteService,private router:Router,private auth:AuthService, private comService:ComunicazioneService){}
  async ngOnInit(){
    this.spinner.show();
    await new Promise(res => setTimeout(res, 2000));
    this.spinner.hide();
    
    if (window.screen.width < 760) {
      this.mobile = true;
      this.showmenu = false;
    }
    this.email=(JSON.parse(localStorage.getItem('user')??'{}')?.email)
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
      this.subscription = this.comService.data$.subscribe(data => {
        this.goTo(data)
      });
      this.destroyer.onDestroy(()=>{
        this.subscription.unsubscribe;
      })
    }
    this.role = await this.alunni.getUserRole(this.email) ?? '';
    this.router.navigate(['home/homepage']);

  }
  goType(){
      if(JSON.parse(localStorage.getItem('user')!??'{}').tipo==1) {this.router.navigate(['home/alunno/'])}
      else this.router.navigate(['home/docente'])
  }
  logOut(){
    this.auth.SignOut()
  }
  goTo(scelta:any){
    console.log("SCELTA",scelta)
    this.selected=scelta;
    if(this.role === 'preside'){
      switch (scelta) {
        case 0: this.router.navigate(['home/homepage']); break;
        case 6: this.router.navigate(['home/alunno/alunni']);  break;
        case 7: this.router.navigate(['home/docente/docenti']);  break;
        case 8: this.router.navigate(['home/classi']);  break;
        case 5: this.router.navigate(['home/corsi']);  break;
        case 1: this.router.navigate(['home/registro']); break;
        case 4: this.router.navigate(['home/pagelle']);  break;
        default: break;
      }
    }
    if(this.role === 'alunno'){
      switch (scelta) {
        case 0: this.router.navigate(['home/homepage']); break;
        case 1: this.router.navigate(['home/classi']);  break;
        default: break;
      }
    }
  }
  ShowMenu(){
    this.showmenu= !this.showmenu;
  }
}
