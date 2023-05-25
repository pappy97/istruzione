/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorsoService, DocenteService } from '@istruzione/shared/registro';
import { lezione, user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-lezioni',
  templateUrl: './lezioni.component.html',
  styleUrls: ['./lezioni.component.scss'],
})
export class LezioniComponent implements OnInit{
  @Input() type:any;
  @Input() lezioni:lezione[]=[]
  utente!: user;
  panelOpenState=false;
  constructor(private docentiservice:DocenteService,private corsiService:CorsoService,private router:Router){}
  ngOnInit(): void {
    this.utente=JSON.parse(localStorage.getItem("utente")!)
    this.corsiService.getCorsi()
  }
  getCorso(ver:any){
    const a=this.corsiService.getCorsoById(ver)
    return a?.titolo
  }
  getDocente(prof:any){
    const a = this.docentiservice.getDocenteById(prof);
    return a?.nome+" "+a?.cognome
  }
  goToinsert(){
    this.router.navigate([this.router.url+'/insertLezione'])
  }
}
