/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db:AngularFirestore) { }
  public getType(email:string){
    return this.db.collection('users',ref => ref.where('email', '==', email)).get()
  }
  public getUsers(){
    return this.db.collection('users').get()
  }
}
