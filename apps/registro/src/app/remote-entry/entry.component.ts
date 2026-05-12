/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component,OnInit } from '@angular/core';
import { AlunniBackService, CompitiService, DocenteService, LezioniService, RegistroService, RetriveDBService } from '@istruzione/shared/registro';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { verifica } from '@istruzione/shared/registro';

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
  classi = [
    "1A",
    "1B",
    "1C",
    "2A",
    "2B",
    "2C",
    "3A",
    "3B",
    "3C",
    "4A",
    "4B",
    "4C",
    "5A",
    "5B",
    "5C",
  ]
  reg:verifica[]=[];
  constructor(private db:RetriveDBService,private alunniback:AlunniBackService,private comp:CompitiService,private registro:RegistroService,private lezioniService:LezioniService,private docenti:DocenteService){
  }
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem("utente")!)
    console.log("UTENTE",this.utente);
    
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
    if(this.utente.tipo==2)this.reg= this.registro.getVerificheByDocente(this.utente.id)
    else {this.reg=this.registro.getVerificheByClass(this.utente.classe)}
  }
  getLezioni(){
  return this.lezioniService.getLezioniByClasse(this.selected);
  }
  getLezioniProf(){
    return this.lezioniService.getLezioniByClasseAndProf(this.selected,this.utente.id)
  }
  getCompiti(){
    console.log(this.comp.getCompitiByClasseAndProfessor(this.selected,this.utente.id))
  }
}
