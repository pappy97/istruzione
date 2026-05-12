/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { inject, Injectable } from '@angular/core';
import { compito } from './interfaces';
import { Firestore, addDoc, collection, collectionData, doc, orderBy, query, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CompitiService {
  private firestore = inject(Firestore); 
  private Compiti:compito[]=[]

  public async getCompiti(){
    await this.getCompitiBack()
    return this.Compiti;
  }

  public async getCompitiBack(){

    const q = query(
      collection(this.firestore,'compiti'),
      orderBy("data","desc")
    )
    collectionData(q,{idField:'id'}).subscribe((data:any)=>{
      this.Compiti = data
    })
  }
  public getCompitoById(id:string){
    return this.Compiti.find(e=> e.id==id)
  }
  public getCompitiByProfessore(prof:string){
    return this.Compiti.filter((e:compito)=> e.professore===prof)
  }
  public getCompitiByClasse(classe:any){
    return this.Compiti.filter(e=> e.classe===classe)
  }
  public getCompitiByClasseAndProfessor(classe:any,prof:string){
    return this.Compiti.filter(e=> (e.classe==classe && e.professore==prof))
  }

  public async addCompito(compito:compito){
    const ref = await addDoc(
      collection(this.firestore, 'compiti'),
      compito
    );
    await updateDoc(ref, {
      id: ref.id
    });
  }
}
