/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from '@angular/core';
import { pagella } from './interfaces';

import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PagelleService{
  private firestore = inject(Firestore); 

  private pagelle!:pagella[];

  public async getPagelle(){
    await this.getPagelleBack()
    return this.pagelle;
  }

  public async getPagelleBack(){
    collectionData(
      collection(this.firestore,'Pagelle'),
      {idField:'id'}
    ).subscribe((data:any)=>{
      this.pagelle = data
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
  public async addPagella(pagella:pagella){
    const ref = await addDoc(
      collection(this.firestore, 'Pagelle'),
      pagella
    );
    await updateDoc(ref, {
      id: ref.id
    });
  }
  public addPagelle(pagelle:pagella[]){
    pagelle.forEach(pag=> this.addPagella(pag));
  }
  public getAllPagella(){
    return this.pagelle;
  }
  public async ConfirmPagella(pagellaId:any){
    const q = query(
      collection(this.firestore, 'Pagelle'),
      where('id', '==', pagellaId)
    );
    const snapshot = await getDocs(q);
    snapshot.forEach(async (d) =>{
      await updateDoc(
        doc(this.firestore,'Pagelle',d.id),
        {isConfirmed:true}
      )
    })
  }
  public async removePagella(pagellaId:any){
    const q = query(
      collection(this.firestore, 'Pagelle'),
      where('id', '==', pagellaId)
    );

    const snapshot = await getDocs(q);
    snapshot.forEach(async (d) =>{
      await deleteDoc(
        doc(this.firestore,'Pagelle',d.id)
      )
    })
  }
}
