import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  updateDoc,
  and
} from '@angular/fire/firestore';
import {
  Functions,
  httpsCallable
} from '@angular/fire/functions';

import { Observable } from 'rxjs';
import { user } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlunniBackService {

  private firestore = inject(Firestore);
  private functions = inject(Functions);
  // 🔥 REATTIVO (NO STATO LOCALE)
  alunni$: Observable<user[]> | undefined;

  getAlunni() {
    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef,where('tipo', '==', 1));
    return collectionData(q, { idField: 'id' }) as Observable<user[]>;
  }
  async addAlunno(data: any) {
    const callable = httpsCallable(this.functions, 'createUser');
    const result = await callable(data);
    return result.data;
  }
  async updateAlunno(user: user) {
    const q = query(collection(this.firestore, 'users'),where('id', '==', user.id));
    const snapshot = await getDocs(q);
    const promises = snapshot.docs.map(d =>
      setDoc(doc(this.firestore, 'users', d.id), user)
    );
    await Promise.all(promises);
  }
  async deleteAlunno(userId: string) {
    const q = query(collection(this.firestore, 'users'),where('id', '==', userId));
    const snapshot = await getDocs(q);
    const promises = snapshot.docs.map(d =>
      deleteDoc(doc(this.firestore, 'users', d.id))
    );
    await Promise.all(promises);
  }
  async getUserByEmail(email: string): Promise<user | null> {
    const q = query(collection(this.firestore, 'users'),where('email', '==', email));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    return snapshot.docs[0].data() as user;
  }
  async getNameAlunnobyID(id: string): Promise<string> {
    const q = query(collection(this.firestore, 'users'),where('id', '==', id));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return '';
    const user = snapshot.docs[0].data() as user;
    return user.nome + ' ' + user.cognome
  }

  async getUserRole(email: string): Promise<string> {
    const user = await this.getUserByEmail(email);
    if (!user) return '';
    return user.tipo === 1 ? 'alunno' : 
    user.tipo === 0 ? 'preside' :
    'docente';
  }
  async getAlunnibyClasse(classe:string){
    const q = query(collection(this.firestore, 'users'),where('classe', '==', classe));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    return snapshot.docs.map(d => d.data() as user);
  }
  async getAlunniNoClasse(){
    const q = query(collection(this.firestore, 'users'),where('classe', '==', '',),where('tipo','==',1));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return null;
    return snapshot.docs.map(d => d.data() as user);
  }
}