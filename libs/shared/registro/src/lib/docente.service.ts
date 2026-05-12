import { inject, Injectable } from '@angular/core';
import { user } from './interfaces';

import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, query, setDoc, updateDoc, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private firestore = inject(Firestore); 
  
  private Docenti:user[]=[]

  public async getDocenti(){
    await this.getDocentiBack()
    return this.Docenti;
  }

  public async addDocente(docente:user){
    const ref = await addDoc(
      collection(this.firestore, 'users'),
      docente
    );
    await updateDoc(ref, {
      id: ref.id
    });
  }

  public async getDocentiBack(){
    const q = query(
      collection(this.firestore, 'docenti'),
      where('type', 'in', [0,2])
    );
    collectionData(q, { idField: 'id' }).subscribe((data:any) => {
      this.Docenti = data;
    });
  }
  public getAllDocenti(){
    return this.Docenti;
  }
  public getDocenteByEmail(email:string){
    return this.Docenti.find(e=> e.email==email)
  }
  public getDocenteById(id:string){
    return this.Docenti.find(e=> e.id==id)
  }
  public getDocentiByClass(classe:any){
    return this.Docenti.filter(e=> e.classe.includes(classe))
  }
  updateDocente(user:user){
    return setDoc(
      doc(this.firestore, 'users', user.id),
      user
    );
  }

  deleteDocente(userId:string){
    return deleteDoc(doc(this.firestore, 'users', userId));

  }

  addClassDocente(usr:string,classe:string){
    const docRef = doc(this.firestore, 'users', usr);

    const user = this.getDocenteById(usr);

    const classi = [...(user?.classe ?? [])]; // immutabilità
    classi.push(classe);

    return updateDoc(docRef, {
      classe: classi
    });
  }
}
