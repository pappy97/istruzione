/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { user } from './interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  constructor(private db: AngularFirestore) { }
  private Docenti:user[]=[]

  public async getDocenti(){
    await this.getDocentiBack()
    return this.Docenti;
  }
  public async addDocente(docente:user){
    await this.db.collection('users').add(docente)
  }
  public async getDocentiBack(){
    this.db.collection('users',ref => ref.where('type', '==', 2)).valueChanges().subscribe((e:any)=>{this.Docenti=e})
  }
  public getAllDocenti(){
    return this.Docenti;
  }
  public getDocenteById(id:string){
    return this.Docenti.find(e=> e.id==id)
  }
  public getDocentiByClass(classe:any){
    return this.Docenti.filter(e=> e.classe.includes(classe))
  }
  public getNewID(){
    let e=this.Docenti.sort((a,b)=>a.id<b.id?-1:1)
    let id=parseInt(e[e.length-1].id.substring(1))+1
    if(id<10)return "A0"+id
    else return "A"+id
  }
  updateDocente(user:user){
    this.db.collection('users',ref=>ref.where('id', '==', user.id)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('users').doc(doc.id).set(user)
      })
    })
  }
  deleteDocente(user:string){
    this.db.collection('users',ref=>ref.where('id', '==', user)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('users').doc(doc.id).delete()
      })
    })
  }
}
