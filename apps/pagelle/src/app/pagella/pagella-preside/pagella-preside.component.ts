/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { AlunniBackService, CorsoService, PagelleService, RetriveDBService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-pagella-preside',
  templateUrl: './pagella-preside.component.html',
  styleUrls: ['./pagella-preside.component.scss'],
})
export class PagellaPresideComponent implements OnInit{
  _Classi=["1A","2A","3A","4A","5A","1B","2B","3B","4B","5B","1C","2C","3C","4C","5C"]
  ngOnInit(){
    this.db.retrivedb()
  }
  constructor(private corsi:CorsoService,private db:RetriveDBService,private pag:PagelleService, private al:AlunniBackService){}

  getCorso(corso:any){
    return this.corsi.getCorsoById(corso)?.titolo
  }
  getAlunno(alunno:any){
    let a= this.al.getAlunnobyID(alunno);
    return a?.cognome+" "+a?.nome
  }
  getPagelleToConfirm(){
    return this.pag.getAllPagella().filter(e=>e.isconfirmed==false)
  }
  getPagelleConfirmed(){
    return this.pag.getAllPagella().filter(e=>e.isconfirmed==true)
  }
  Approva(pag:any){
    this.pag.ConfirmPagella(pag);
  }
}
