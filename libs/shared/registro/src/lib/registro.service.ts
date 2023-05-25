/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { verifica } from './interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private verifiche:verifica[]=[]
  constructor(private db: AngularFirestore) { }
  public async getVerifiche(){
    await this.getVerificheBack()
    return this.verifiche;
  }
  public async getVerificheBack(){
    this.db.collection('verifiche').valueChanges().subscribe((e:any)=>{this.verifiche=e.sort((a:any,b:any)=>(a.data>b.data?-1:1))})
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
  public storeVerifiche(verifiche:verifica){
     this.db.collection('verifiche').doc().set(verifiche);
  }
  public getNewId(corso:any,classe:any){
    let i=this.verifiche.filter((e:verifica)=> ((e.corso==corso)&&(e.classe==classe)))
    i=i.sort((a,b)=>(a.id<b.id?-1:1))
    console.log(i)
    let a=i[i.length-1].id;
    let c=parseInt(a.substring(7))+1
    let id="V"+classe+corso;
    if(c<10)return id+"000"+c
    else if (c<100) return id+"00"+c
    else if (c<1000) return id+"0"+c
    else return id+c
  }
}
