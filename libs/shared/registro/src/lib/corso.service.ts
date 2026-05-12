/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { inject, Injectable } from '@angular/core';
import { corso } from './interfaces';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, orderBy, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorsoService {
  private firestore = inject(Firestore); 
  corsi$: Observable<corso[]> = collectionData(
    query(
      collection(this.firestore, 'corsi'),
      orderBy('id','asc')
    ),
    { idField: 'id' }
  ) as Observable<corso[]>;
  private Corsi:corso[]=[]

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
  public async addCorso(corso:corso){
    const ref = await addDoc(
      collection(this.firestore, 'corsi'),
      corso
    );
    await updateDoc(ref, {
      id: ref.id
    });
  }

  public getAllCorsiConfirmed(){
    return this.Corsi.filter(e=>e.isConfirmed);
  }
  public getAllCorsiNotConfirmed(){
    return this.Corsi.filter(e=>e.isConfirmed==false);
  }
  public UpdateCorso(corso:corso){
   setDoc(
      doc(this.firestore, 'corsi', corso.id),
      corso
   )
  }
  public async ConfirmCorso(corsoId:string){
    const q = query(
      collection(this.firestore, 'corsi'),
      where('id', '==', corsoId)
    );
    const snapshot = await getDocs(q);
    snapshot.forEach(async (d) =>{
      await updateDoc(
        doc(this.firestore,'corsi',d.id),
        {isConfirmed:true}
      )
    })
  }

  removeCorso(corso:corso){
    return deleteDoc(
      doc(this.firestore, 'corsi', corso.id)
    );
  }
}
