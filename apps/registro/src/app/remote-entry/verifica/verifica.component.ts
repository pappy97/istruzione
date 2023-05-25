/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, CorsoService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-verifica',
  templateUrl: './verifica.component.html',
  styleUrls: ['./verifica.component.scss'],
})
export class VerificaComponent implements OnInit{

  @Input() verifica:any
  @Input() alunni:any;
  utente:any;
  panelOpenState=false;
  constructor(private al:AlunniBackService,private router:Router,private corso:CorsoService){}
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem("user")!)
  }
  getNomeAlunno(id:string){
    let a= this.al.getAlunnobyID(id);
    return a?.nome+" "+a?.cognome
  }
  goToinsert() {
    this.router.navigate([this.router.url+'/insertVoto'])
  }
  getCorso(id:string){
    return this.corso.getCorsoById(id)?.titolo;
  }
}
