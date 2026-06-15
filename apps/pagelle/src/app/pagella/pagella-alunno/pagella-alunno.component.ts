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
  getCorso(id: any) {
    console.log('CIAO');
    
  }
  getDocenti(id:any){
    console.log("CIAO")
  }
}
