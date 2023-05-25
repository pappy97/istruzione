/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

import { Component,Input,OnInit } from '@angular/core';
import { CorsoService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-verifica-studente',
  templateUrl: './verifica-studente.component.html',
  styleUrls: ['./verifica-studente.component.scss'],
})
export class VerificaStudenteComponent implements OnInit{
  @Input() verifica:any
  @Input() type:any;
  utente:any;
  panelOpenState=false;
  constructor(private corsiService:CorsoService){}
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem("utente")!)
  console.log(this.verifica)
    this.corsiService.getCorsi()
  }

  getVoto(ver:any){
    let i= ver.find((e:any)=> e.alunno===this.utente.id)
    if (i!= undefined) return i.voto
    else return null
  }
  getCorso(ver:any){
    let a=this.corsiService.getCorsoById(ver)
    return a?.titolo
  }
}
