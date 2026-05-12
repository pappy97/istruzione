/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { inject, Injectable } from '@angular/core';
import { verifica } from './interfaces';
import { Firestore, addDoc, collection, collectionData, doc, orderBy, query, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private firestore = inject(Firestore); 

  private verifiche:verifica[]=[]
  public async getVerifiche(){
    await this.getVerificheBack()
    return this.verifiche;
  }
  public async getVerificheBack(){
    collectionData(
      query(
        collection(this.firestore, 'verifiche'),
        orderBy('data', 'desc') 
      ),
      { idField: 'id' }
    ).subscribe((data:any)=>{
      this.verifiche = data
    })
    
  }
  public getVerificheByDocente(id:string){
    return this.verifiche.filter(e=> e.professore==id)
  }
  public getVerificheByClass(classe:any){
    return this.verifiche.filter(e=> e.classe==classe)
  }
  public getVerificheScritte(){
    return this.verifiche.filter(e=> e.type==1)
  }
  public getVerificheOrali(){
    return this.verifiche.filter(e=> e.type==2)
  }
  public getVerificheByStudent(alunno:any){
    return this.verifiche.filter((e:verifica)=> e.voti.find(a=>a.alunno===alunno)!==undefined )
  }
  public getMediaScrittaByStudent(alunno:any,corso:any){
    let sum=0;
    const a=this.verifiche.filter((e:verifica)=> (e.type==1)&&(e.corso==corso)&&(e.voti.find(a=>a.alunno===alunno)!==undefined))
    a.forEach(e=>{
      const c=e.voti.find(vo=>vo.alunno==alunno)?.voto
      sum=sum+c!;
    })
    return sum/a.length
  }
  public getMediaOraleByStudent(alunno:any,corso:any){
    let sum=0;
    const a=this.verifiche.filter((e:verifica)=> (e.type==2)&&(e.corso==corso)&&(e.voti.find(a=>a.alunno===alunno)!==undefined))
    a.forEach(e=>{
      const c=e.voti.find(vo=>vo.alunno==alunno)?.voto
      sum=sum+c!;
    })
    return sum/a.length
  }
  public getMediaByStudent(alunno:any,corso:any){
    let sum=0;
    const a=this.verifiche.filter((e:verifica)=> (e.corso==corso)&&(e.voti.find(a=>a.alunno===alunno)!==undefined))
    a.forEach(e=>{
      const c=e.voti.find(vo=>vo.alunno==alunno)?.voto
      sum=sum+c!;
    })
    return sum/a.length
  }
  public async storeVerifiche(verifiche:verifica){
    const ref = await addDoc(
      collection(this.firestore, 'verifiche'),
      verifiche
    );
    await updateDoc(ref, {
      id: ref.id
    });
  }
}
