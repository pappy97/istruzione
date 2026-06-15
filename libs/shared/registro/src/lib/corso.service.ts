/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { inject, Injectable } from '@angular/core';
import { corso } from './interfaces';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, getDoc, getDocs, orderBy, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
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

  getCorsi() {
    const usersRef = collection(this.firestore, 'corsi');
    const q = query(usersRef);
    return collectionData(q, { idField: 'id' }) as Observable<corso[]>;
  }

  public getCorsoById(id: string) {
    const corsoRef = doc(this.firestore, `corsi/${id}`);
    return docData(corsoRef,{idField: 'id'} ) as Observable<corso>;
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
