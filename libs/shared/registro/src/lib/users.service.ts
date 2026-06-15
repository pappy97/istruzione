/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-empty-function */
import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private firestore = inject(Firestore); 

  public getType(email:string){
    
    const q= query(
      collection(this.firestore,'users'),
      where('email', '==', email)
    )
    return collectionData(q,{idField:'id'})
  }
  public getUsers(){
    return collectionData(
      query(
        collection(this.firestore,'users')
      ),
      {idField:'id'}
    )   
  }
}
