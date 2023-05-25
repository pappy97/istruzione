/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lezione } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class LezioniService {
  private lezioni:lezione[]=[]
  constructor(private db: AngularFirestore) { }
  public async getLezioni(){
    await this.getLezioniBack()
    return this.lezioni;
  }

  public async getLezioniBack(){
    this.db.collection('lezioni').valueChanges().subscribe((e:any)=>{
      this.lezioni=e.sort((a:any,b:any)=>(a.data<b.data?-1:1))})
  }
  public getlezioneById(id:string){
    return this.lezioni.find(e=> e.id==id)
  }
  public getLezioniByProfessore(prof:string){
    return this.lezioni.filter((e:lezione)=> e.docente==prof)

  }
  public getLezioniByClasse(classe:any){
    console.log(this.lezioni)
    return this.lezioni.filter((e:lezione)=> e.classe==classe)

  }
  public getLezioniByClasseAndProf(classe:string,prof:string){
    return this.lezioni.filter((e:lezione)=> ((e.classe==classe)&&(e.docente==prof)))

  }
  public getLezioniByCorso(corso:any){
    return this.lezioni.filter((e:lezione)=> e.corso==corso)
  }
  public addLezione(lezione:lezione){
    this.db.collection('lezioni').doc().set(lezione);
  }
  public getNewId(corso:any,classe:any){
    let i=this.lezioni.filter((e:lezione)=> ((e.corso==corso)&&(e.classe==classe)))
    i=i.sort((a,b)=>(a.id<b.id?-1:1))
    let a=i[i.length-1].id;
    let c=parseInt(a.substring(7))+1
    let id="L"+classe+corso;
    if(c<10)return id+"000"+c
    else if (c<100) return id+"00"+c
    else if (c<1000) return id+"0"+c
    else return id+c
  }
}
