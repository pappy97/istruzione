/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorsoService, DocenteService, LezioniService, RegistroService, lezione, user, verifica } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.scss'],
})
export class DocentiComponent implements OnInit{
  utente!:user
  docenti:user[]=[];
  voti:verifica[]=[];
  lezioni:lezione[]=[];
  showadd=true;
  showupdate=true;
  showremove=true;

  panelOpenState = false;
  constructor(private router:Router,private docenteservice:DocenteService,private reg:RegistroService,private lez:LezioniService,private corsi:CorsoService){}
  ngOnInit(){
      this.utente=JSON.parse(localStorage.getItem('utente')!)
      if (this.utente.type==2) this.router.navigate(['home']);
      this.docenti= this.docenteservice.getDocentiByClass(this.utente.classe);
      this.voti=this.reg.getVerificheByStudent(this.utente.id)
      this.lezioni=this.lez.getLezioniByClasse(this.utente.classe)
  }
  getCorsi(prof:any){
    let i="";
    this.corsi.getCorsiByProfessore(prof).forEach((v)=>{
      if(i==="")i=v.titolo
      else i=i+", "+v.titolo;
    })
    return i;
  }
  getLezioni(prof:any){
    console.log(this.lezioni)
    return this.lezioni.filter(e=> e.docente==prof)
  }
  getCorso(id:any){
    return this.corsi.getCorsoById(id)?.titolo;
  }
  getVoti(prof:any){
    return this.voti.filter(e=> e.professore==prof)
  }
  getVoto(v:any,i:any){
    return (this.voti[i].voti.find(e=> e.alunno==this.utente.id))?.voto
  }

}
