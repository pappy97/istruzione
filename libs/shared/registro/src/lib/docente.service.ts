import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private docenti=[
    {nome:"Gianna",cognome:"Lambiase",id:"001",classi:["2A"]},
    {nome:"Pina",cognome:"Oliva",id:"002",classi:["4A"]},
    {nome:"Ami",cognome:"Pepe",id:"003",classi:["3A"]},
    {nome:"Mario",cognome:"Rossi",id:"004",classi:["2A","3A","4A"]},
    {nome:"Nino",cognome:"Cerruto",id:"005",classi:["4A","3A"]},
  ]
  public getDocenti(){
    return this.docenti;
  }
  public getDocenteById(id:string){
    return this.docenti.find(d=>(d.id==id))
  }
  public getDocentiByClass(classe:string){
    return this.docenti.filter(d=>d.classi.includes(classe))
  }

}
