/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorsoService, DocenteService, LezioniService, RegistroService } from '@istruzione/shared/registro';
import { corso, user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-corsi-alunno',
  templateUrl: './corsi-alunno.component.html',
  styleUrls: ['./corsi-alunno.component.scss'],
})
export class CorsiAlunnoComponent implements OnInit{
  utente!:user;
  corsi:corso[]=[]
  professori!:user[];
  panelOpenState=false;
  constructor(private router:Router,private cor:CorsoService,private doc:DocenteService,private lez:LezioniService,private ve:RegistroService){
  }
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!)
}
getCorsi(){
  this.corsi=this.cor.getCorsiConfirmedByClasse("2A");
  return this.corsi
}
getProf(docs:string[]){
  let toreturn=""
  docs.forEach(e=>{
    const u=this.doc.getDocenteById(e);
    if(toreturn=="") toreturn=""+u?.cognome+" "+u?.nome
    else toreturn=toreturn+", "+u?.cognome+" "+u?.nome
  })
  return toreturn;
}
getLezioni(id:any){
  return this.lez.getLezioniByCorso(id)
}
getprof(id:any){
  const i= this.doc.getDocenteById(id)
  return i?.nome+" "+i?.cognome
}
getVoti(id:any){
  return this.ve.getVerificheByStudent(this.utente.id).filter(e=> e.corso==id)
}
getVoto(v:any,i:any){
  return (v.find((e:any)=> e.alunno==this.utente.id))?.voto
}

}
