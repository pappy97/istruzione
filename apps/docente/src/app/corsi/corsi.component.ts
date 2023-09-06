/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, CorsoService, LezioniService, RegistroService, user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.scss'],
})
export class CorsiComponent implements OnInit{
  docente!:user
  type!: number;
  selected=0;
  showadd=true;
  showremove=true;
  showupdate=true;
  showconfirm=true
  panelOpenState=false;
  constructor(private router:Router,private al:AlunniBackService,private cor:CorsoService,private lez:LezioniService,private ve:RegistroService){
  }
  ngOnInit(){

    this.docente=JSON.parse(localStorage.getItem("utente")!)
    this.type=this.docente.type;
  }
  goToInsert(){
    this.router.navigate(['home/corsi/insertCorso'])
  }
  getCorsi(){
    return this.cor.getCorsiConfirmedByProfessore(this.docente.id)
  }
  getLezioni(id:any){
    return this.lez.getLezioniByCorso(id);
  }
  getVoti(id:any){
    return this.ve.getVerificheByDocente(this.docente.id).filter(e=> e.corso==id)
  }
  getAlunno(id:any){
    const i= this.al.getAlunnobyID(id);
    return i?.nome+" "+ i?.cognome
  }
}
