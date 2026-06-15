import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, orderBy, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { classe } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private firestore = inject(Firestore);
  
  getClassi() {
    const usersRef = collection(this.firestore, 'classi');
    const q = query(usersRef,orderBy('nome','asc'));
    return collectionData(q, { idField: 'id' }) as Observable<classe[]>;
  }
  
  getClassiBySection(sez:string) {
    const usersRef = collection(this.firestore, 'classi');
    const q = query(usersRef, where('sezione','==',sez));
    return collectionData(q, { idField: 'id' }) as Observable<classe[]>;
  }
  
  getClassiByAnno(anno:string) {
    const usersRef = collection(this.firestore, 'classi');
    const q = query(usersRef, where('sezione', '==', anno));
    return collectionData(q, { idField: 'id' }) as Observable<classe[]>;
  }
  
  getClasseById(id:string) {
    const usersRef = collection(this.firestore, 'classi');
    const q = query(usersRef, where('id', '==', id));
    return collectionData(q, { idField: 'id' }) as Observable<classe[]>;
  }
  
  getClasseByDocente(docente:string) {
    const usersRef = collection(this.firestore, 'classi');
    const q = query(usersRef, where('coordinatoreId', '==', docente));
    return collectionData(q, { idField: 'id' }) as Observable<classe[]>;
  }
  async addClasse(classe:any) {
    console.log("AGGIUNTA CLASSE", classe);
    const ref = await addDoc(collection(this.firestore, 'classi'), classe);
    await updateDoc(ref, {id: ref.id});
  }
}
