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
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { user } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlunniBackService {

  private firestore = inject(Firestore);

  // 🔥 REATTIVO (NO STATO LOCALE)
  alunni$: Observable<user[]> = collectionData(
    query(
      collection(this.firestore, 'users'),
      where('tipo', '==', 1)
    ),
    { idField: 'id' }
  ) as Observable<user[]>;

  // ➕ CREATE
  async addAlunno(alunno: user) {
    const ref = await addDoc(
      collection(this.firestore, 'users'),
      alunno
    );
    await updateDoc(ref, {
      id: ref.id
    });
  }

  // ✏️ UPDATE (usa document ID se possibile)
  async updateAlunno(user: user) {
    const q = query(
      collection(this.firestore, 'users'),
      where('id', '==', user.id)
    );

    const snapshot = await getDocs(q);

    const promises = snapshot.docs.map(d =>
      setDoc(doc(this.firestore, 'users', d.id), user)
    );

    await Promise.all(promises);
  }

  // 🗑 DELETE
  async deleteAlunno(userId: string) {
    const q = query(
      collection(this.firestore, 'users'),
      where('id', '==', userId)
    );

    const snapshot = await getDocs(q);

    const promises = snapshot.docs.map(d =>
      deleteDoc(doc(this.firestore, 'users', d.id))
    );

    await Promise.all(promises);
  }

  // 🔍 UTILITY (se proprio ti serve sync)
  async getAlunniOnce(): Promise<user[]> {
    const snapshot = await getDocs(collection(this.firestore, 'users'));
    return snapshot.docs.map(d => d.data() as user);
  }

  async getUserByEmail(email: string): Promise<user | null> {
    const q = query(
      collection(this.firestore, 'users'),
      where('email', '==', email)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    return snapshot.docs[0].data() as user;
  }

  async getNameAlunnobyID(id: string): Promise<string> {
    const q = query(
      collection(this.firestore, 'users'),
      where('id', '==', id)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) return '';

    const user = snapshot.docs[0].data() as user;
    return user.nome + ' ' + user.cognome
  }

  async getUserRole(email: string): Promise<'alunno' | 'docente' | null> {
    const user = await this.getUserByEmail(email);
    if (!user) return null;

    return user.tipo === 1 ? 'alunno' : 'docente';
  }

  async getAlunnibyClasse(classe:string){
        const q = query(
      collection(this.firestore, 'users'),
      where('classe', '==', classe)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    return snapshot.docs.map(d => d.data() as user);
  }
}