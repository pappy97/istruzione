/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { compito } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class CompitiService {
  constructor(private db: AngularFirestore) { }
  private Compiti:compito[]=[]

  public async getCompiti(){
    await this.getCompitiBack()
    return this.Compiti;
  }

  public async getCompitiBack(){
    this.db.collection('compiti').valueChanges().subscribe((e:any)=>{this.Compiti=e.sort((a:any,b:any)=>(a.data>b.data?-1:1))})
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
  public getNewId(corso:any,classe:any){
    let i=this.Compiti.filter((e:compito)=> ((e.corso==corso)&&(e.classe==classe)))
    i=i.sort((a,b)=>(a.id<b.id?-1:1))
    let a=i[i.length-1].id;
    let c=parseInt(a.substring(7))+1
    let id="C"+classe+corso;
    if(c<10)return id+"000"+c
    else if (c<100) return id+"00"+c
    else if (c<1000) return id+"0"+c
    else return id+c
  }
  public addCompito(compito:compito){
    this.db.collection('compiti').doc().set(compito);
  }
}
