import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunniService {
   private alunni=[
    {nome:"Antonio",cognome:"Pappalardo",id:"001",classe:"2A"},
    {nome:"Raffaele",cognome:"Della Ragione",id:"002",classe:"2A"},
    {nome:"Bruno",cognome:"Pepe",id:"003",classe:"3A"},
    {nome:"Gaia",cognome:"Paciullo",id:"004",classe:"3A"},
    {nome:"Ciro",cognome:"Immobile",id:"005",classe:"4A"},
  ]
  public getAlunni(){
    return this.alunni;
  }
  public getAlunnoById(id:string){
    return this.alunni.find(a=>(a.id==id));
  }

  public getAlunniByClass(classe:string){
    return this.alunni.filter(a=>a.classe==classe)
  }

}
