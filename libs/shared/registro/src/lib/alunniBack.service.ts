/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs';
import { user } from './interfaces';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AlunniBackService {
  constructor(private db:AngularFirestore) { }
  private Alunni: user[]=[];
  public async getAlunni(){
    await this.getAlunniFire()
    return this.Alunni
  }
  private async getAlunniFire(){
    this.db.collection('users',ref => ref.where('type', '==', 1)).valueChanges().subscribe((e:any)=>{this.Alunni=e})
  }
  public async addAlunno(alunno:user){
    await this.db.collection('users').add(alunno)
  }

  public getAlunnobyID(id:any){
    return this.Alunni.find(e=>e.id==id)
  }
  public getAlunnobyEmail(email:string){
    return this.Alunni.find(e=>e.email==email)
  }
  public getAlunnibyClasse(classe:string){
    return this.Alunni.filter(e=>e.classe==classe)
  }
  public getNewID(){
    let e=this.Alunni.sort((a,b)=>a.id<b.id?-1:1)
    let id=parseInt(e[e.length-1].id)+1
    if(id<10)return "000"+id
    if(id<100)return "00"+id
    if(id<1000)return "0"+id
    else return ""+id
  }
  getAllAlunni(){
    return this.Alunni;
  }
  updateAlunno(user:user){
    this.db.collection('users',ref=>ref.where('id', '==', user.id)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('users').doc(doc.id).set(user)
      })
    })
  }
  deleteAlunno(user:string){
    this.db.collection('users',ref=>ref.where('id', '==', user)).get().subscribe(e=>{
      e.docs.forEach(doc=>{
        this.db.collection('users').doc(doc.id).delete()
      })
    })
  }
}
