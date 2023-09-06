/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component,OnInit } from '@angular/core';
import { CorsoService, DocenteService, PagelleService } from '@istruzione/shared/registro';
import { pagella, user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-pagella-alunno',
  templateUrl: './pagella-alunno.component.html',
  styleUrls: ['./pagella-alunno.component.scss'],
})
export class PagellaAlunnoComponent implements OnInit{
  displayedColumns = ['corso', 'voto','docente'];
  utente!:user;
  pagelle!:pagella[];
  constructor(private pag:PagelleService,private corso:CorsoService,private doc:DocenteService){}
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!)

  }
  getPagelleNotConfirmed(){
    this.pagelle=this.pag.getPagelleByAlunno(this.utente.id);
    return this.pagelle.filter(e=>e.isconfirmed==false)
  }
  getPagelleConfirmed(){
    return this.pagelle.filter(e=>e.isconfirmed==true)
  }
  getCorso(id:any){
   return this.corso.getCorsoById(id)?.titolo
  }
  getDocenti(id:any){
    const docs= this.corso.getCorsoById(id)?.docenti
    let toreturn=""
    docs?.forEach(e=>{
      const d=this.doc.getDocenteById(e)
      if(toreturn=="") toreturn=d?.cognome+" "+d?.nome
      else toreturn= toreturn+", "+d?.cognome+" "+d?.nome
    })
    return toreturn
  }
}
