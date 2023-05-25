/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, CorsoService, LezioniService, RegistroService } from '@istruzione/shared/registro';
import { user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-corsi-docenti',
  templateUrl: './corsi-docenti.component.html',
  styleUrls: ['./corsi-docenti.component.scss'],
})
export class CorsiDocentiComponent implements OnInit {
  utente!:user
  panelOpenState=false;
  constructor(private router:Router,private al:AlunniBackService,private cor:CorsoService,private lez:LezioniService,private ve:RegistroService){}

  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!)
  }
  goToInsert(){
    this.router.navigateByUrl('/insertCorso')
  }
  getCorsi(){
    return this.cor.getCorsiByProfessore(this.utente.id)
  }
  getLezioni(id:any){
    return this.lez.getLezioniByCorso(id);
  }
  getVoti(id:any){
    return this.ve.getVerificheByDocente(this.utente.id).filter(e=> e.corso==id)
  }
  getAlunno(id:any){
    const i= this.al.getAlunnobyID(id);
    return i?.nome+" "+ i?.cognome
  }
}
