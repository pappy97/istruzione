/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component,OnInit } from '@angular/core';
import { AlunniBackService, CompitiService, DocenteService, LezioniService, RegistroService } from '@istruzione/shared/registro';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { verifica } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-registro-entry',
  templateUrl: './registro.html',
  styleUrls:['./registro.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RemoteEntryComponent implements OnInit {
  utente!: any;
  alunni:any;
  selected='';
  reg:verifica[]=[];
  constructor(private alunniback:AlunniBackService,private comp:CompitiService,private registro:RegistroService,private lezioniService:LezioniService,private docenti:DocenteService){
  }
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem("utente")!)
  }
  getAlunni(){
    this.alunni= this.alunniback.getAlunnibyClasse(this.selected)
  }
  getScritte(){
    return this.reg.filter((el:any)=>el.type==1)
  }
  getOrali(){
    return this.reg.filter((el:any)=>el.type==2)
  }
  getScritteS(){
    return this.registro.getVerificheByStudent(this.utente.id).filter((el:any)=>el.type==1)
  }
  getOraliS(){
    return this.registro.getVerificheByStudent(this.utente.id).filter((el:any)=>el.type==2)
  }
  getVerifica(){
    if(this.utente.type==2)this.reg= this.registro.getVerificheByDocente(this.utente.id)
    else {this.reg=this.registro.getVerificheByClass(this.utente.classe)}
  }
  getLezioni(){
  return this.lezioniService.getLezioniByClasse(this.selected);
  }
  getLezioniProf(){
    return this.lezioniService.getLezioniByClasseAndProf(this.selected,this.utente.id)
  }
  getCompiti(){
    return this.comp.getCompitiByClasseAndProfessor(this.selected,this.utente.id)
  }
}
