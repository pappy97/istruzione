/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { AlunniBackService, CorsoService, PagelleService, RegistroService } from '@istruzione/shared/registro';
import { corso, pagella, user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-pagella-docente',
  templateUrl: './pagella-docente.component.html',
  styleUrls: ['./pagella-docente.component.scss'],
})
export class PagellaDocenteComponent implements OnInit{
  utente!:user
  voto:number[]=[]
  Corsi!:corso[]
  displayedColumns=['alunno','voto']
  constructor(private corsi:CorsoService,private al:AlunniBackService,private reg:RegistroService,private pag:PagelleService){}
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!)
    this.pag.getPagelle()
    this.getCorsi()
  }
  getCorsiPagelle(){
    return this.corsi.getCorsiConfirmedByProfessore(this.utente.id).filter(e=> this.pag.getAllPagella().map(e=>e.corso).includes(e.id))
  }
  getPagelle(corso:any){
    return this.pag.getPagelleByCorso(corso)
  }
  getAlunno(alunno:any){
    let a=this.al.getAlunnobyID(alunno)
    return ""+a?.cognome+" "+a?.nome
  }
  getCorsi(){
    this.Corsi= this.corsi.getCorsiConfirmedByProfessore(this.utente.id).filter(e=> this.pag.getAllPagella().map(e=>e.corso).includes(e.id)==false)
    return this.Corsi;
  }
  getAlunni(classe:any){
    return this.al.getAlunnibyClasse(classe);
  }
  getMediaScritta(id:any,corso:any){
    return this.reg.getMediaScrittaByStudent(id,corso)
  }
  getMediaOrale(id:any,corso:any){
    return this.reg.getMediaOraleByStudent(id,corso)
  }
  getMedia(id:any,corso:any){
    return this.reg.getMediaByStudent(id,corso)
  }
  Pubblica(corso:any,id:any){
    let pagelle:pagella[]=[];
    let alunni=this.getAlunni(corso.classe)
    this.Corsi=this.Corsi.filter(e=>e.id!=corso.id)
    for(let i=0;i<this.voto.length;i++){
      let p:pagella={
        "alunno":alunni[i].id,
        "classe":corso.classe,
        "corso":corso.id,
        "isconfirmed":false,
        "id":this.pag.getNewId(corso.id,alunni[i].id),
        "professore":this.utente.id,
        "voto":this.voto[i]
      }
      pagelle.push(p)
    }
    this.pag.addPagelle(pagelle);

  }
}
