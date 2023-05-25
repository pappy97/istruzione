/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { pagella } from './interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PagelleService{
  private pagelle!:pagella[];
  constructor(private db: AngularFirestore) { }
  public async getPagelle(){
    await this.getPagelleBack()
    return this.pagelle;
  }

  public async getPagelleBack(){
    await this.db.collection('Pagelle').valueChanges().subscribe((e:any)=>{
      this.pagelle=e
    })
  }
  public getCorsi(prof:any){
    return this.pagelle.filter(p=>p.professore==prof).map(a=>a.corso)
  }
  public getPagellaById(id:string){
    return this.pagelle.find(e=> e.id==id)
  }
  public getPagelleByProfessore(prof:string){
    return this.pagelle.filter((e:pagella)=> ((e.professore==prof)&&(e.isconfirmed==true)))
  }
  public getPagelleByClasse(classe:any){
    return this.pagelle.filter((e:pagella)=> e.classe==classe)
  }

  public getPagelleByClasseAndProf(classe:string,prof:string){
    return this.pagelle.filter((e:pagella)=> ((e.classe==classe)&&(e.professore==prof)))
  }
  public getPagelleByCorso(corso:any){
    return this.pagelle.filter((e:pagella)=> e.corso==corso)
  }
  public getPagelleByAlunno(alunno:any){
    return this.pagelle.filter(e=> e.alunno==alunno)
  }
  public addPagella(pagella:pagella){
    this.db.collection('Pagelle').doc().set(pagella);
  }
  public addPagelle(pagelle:pagella[]){
    pagelle.forEach(pag=> this.addPagella(pag));
  }
  public getNewId(corso:any,alunno:any){
    let i=this.pagelle.filter((e:pagella)=> ((e.corso==corso)&&(e.alunno==alunno)))
    i=i.sort((a,b)=>(a.id<b.id?-1:1))
    const id="P"+alunno+corso;
    if (i.length>0){

      const a=i[i.length-1].id;
      const c=parseInt(a.substring(9))+1
      if(c<10)return id+"000"+c
      else if (c<100) return id+"00"+c
      else if (c<1000) return id+"0"+c
      else return id+c
    }
    else return id+"000"+1
  }
  public getAllPagella(){
    return this.pagelle;
  }
  public ConfirmPagella(pagella:any){
    this.db.collection('Pagelle',ref=>ref.where('id', '==', pagella)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('Pagelle').doc(doc.id).update({"isconfirmed":true})
      })
    })
  }
  removePagella(pagella:any){
    this.db.collection('Pagelle',ref=>ref.where('id', '==', pagella)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('Pagelle').doc(doc.id).delete()
      })
    })
  }
}
