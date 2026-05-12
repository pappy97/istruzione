/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from '@angular/core';
import { lezione } from './interfaces';

import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, orderBy, query, setDoc, updateDoc, where } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class LezioniService {
  private lezioni:lezione[]=[]
  private firestore = inject(Firestore); 
  
  public getLezioni(){
     this.getLezioniBack()
    return this.lezioni;
  }

  public getLezioniBack(){
    collectionData(
      query(
        collection(this.firestore, 'lezioni'),
        orderBy('data', 'asc')
      ),
      { idField: 'id' }
    ).subscribe((data:any)=>{
      this.lezioni = data
    })
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
  public async addLezione(lezione:lezione){
    const ref = await addDoc(
      collection(this.firestore, 'lezioni'),
      lezione
    );
    await updateDoc(ref, {
      id: ref.id
    });
  }
}
