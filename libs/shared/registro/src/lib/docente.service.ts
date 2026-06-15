import { inject, Injectable } from '@angular/core';
import { Assegnazione, user } from './interfaces';

import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  private firestore = inject(Firestore);
  private functions = inject(Functions);

  private Docenti: user[] = [];

  getDocenti() {
    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('tipo', '==', 2));
    return collectionData(q, { idField: 'id' }) as Observable<user[]>;
  }

  async addDocente(data: any) {
    const callable = httpsCallable(this.functions, 'createUser');
    const result = await callable(data);
    return result.data;
  }

  public async getDocentiBack() {
    const q = query(
      collection(this.firestore, 'docenti'),
      where('type', 'in', [0, 2])
    );
    collectionData(q, { idField: 'id' }).subscribe((data: any) => {
      this.Docenti = data;
    });
  }
  public getAllDocenti() {
    return this.Docenti;
  }
  public getDocenteByEmail(email: string) {
    return this.Docenti.find((e) => e.email == email);
  }
  getDocenteById(id: string): Observable<user | undefined> {
    const docenteRef = doc(this.firestore, `users/${id}`);
    return docData(docenteRef, { idField: 'id' }) as Observable<user>;
  }
  public getAssegnazioneByClasse(classe: any) {
    const assegnazioneRef = collection(this.firestore, 'assegnazioni');
    const q = query(assegnazioneRef, where('classe', '==', classe));
    return collectionData(q, { idField: 'id' }) as Observable<Assegnazione[]>;
  }
  public getAssegnazioneByDocente(docente: any) {
    const assegnazioneRef = collection(this.firestore, 'assegnazioni');
    const q = query(assegnazioneRef, where('docente', '==', docente));
    return collectionData(q, { idField: 'id' }) as Observable<Assegnazione[]>;
  }

  updateDocente(user: user) {
    return setDoc(doc(this.firestore, 'users', user.id), user);
  }

  deleteDocente(userId: string) {
    return deleteDoc(doc(this.firestore, 'users', userId));
  }

  async addAssegnazione(assegnazione: any) {
    console.log("AAAA",assegnazione)
    const ref = await addDoc(collection(this.firestore, 'assegnazioni'), assegnazione);
    await updateDoc(ref, {id: ref.id});
  }
  // addClassDocente(usr:string,classe:string){
  //   const docRef = doc(this.firestore, 'users', usr);

  //   const user = this.getDocenteById(usr);

  //   const classi = [...(user?.classe ?? [])]; // immutabilità
  //   classi.push(classe);

  //   return updateDoc(docRef, {
  //     classe: classi
  //   });
  // }
}
