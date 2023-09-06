/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { corso } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  constructor(private db: AngularFirestore) { }
  private Corsi:corso[]=[]

  public async getCorsi(){
    await this.getCorsiBack()
    return this.Corsi;
  }

  public async getCorsiBack(){
    this.db.collection('corsi').valueChanges().subscribe((e:any)=>{this.Corsi=e.sort((a:any,b:any)=>(a.id<b.id?-1:1))})
  }
  public getCorsoById(id:string){
    return this.Corsi.find(e=> e.id==id)
  }
  public getCorsiNotConfirmedByProfessore(prof:string){
    return this.Corsi.filter((e:corso)=> e.docenti.includes(prof)&& !e.isConfirmed)
  }
  public getCorsiByProfessore(prof:string){
    return this.Corsi.filter((e:corso)=> e.docenti.includes(prof))
  }

  public getCorsiConfirmedByProfessore(prof:string){
    return this.Corsi.filter((e:corso)=> e.docenti.includes(prof)&& e.isConfirmed)
  }

  public getCorsiConfirmedByClasse(classe:any){
    return this.Corsi.filter(e=> e.classe===classe && e.isConfirmed)
  }
  public getCorsiNotConfirmedByClasse(classe:any){
    return this.Corsi.filter(e=> e.classe===classe && !e.isConfirmed)
  }
  public addCorso(corso:corso){
    this.db.collection('corsi').doc().set(corso);
  }

  public getAllCorsiConfirmed(){
    return this.Corsi.filter(e=>e.isConfirmed);
  }
  public getAllCorsiNotConfirmed(){
    return this.Corsi.filter(e=>e.isConfirmed==false);
  }
  public UpdateCorso(corso:corso){
    this.db.collection('corsi',ref=>ref.where('id', '==', corso.id)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('corsi').doc(doc.id).set(corso)
      })
    })
  }
  public ConfirmCorso(corso:string){
    this.db.collection('corsi',ref=>ref.where('id', '==', corso)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('corsi').doc(doc.id).update({"isConfirmed":true})
      })
    })
  }

  removeCorso(corso:corso){
    this.db.collection('corsi',ref=>ref.where('id', '==', corso.id)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('corsi').doc(doc.id).delete()
      })
    })
  }
  public getNewId(){
    let i=this.Corsi
    i=i.sort((a,b)=>(a.id<b.id?-1:1))
    let a=i[i.length-1].id;
    let c=parseInt(a)+1
    if(c<10)return "000"+c
    else if (c<100) return "00"+c
    else if (c<1000) return "0"+c
    else return ""+c
  }
}
