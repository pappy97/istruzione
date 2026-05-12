/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component,OnInit } from '@angular/core';
import { user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-corsi-entry',
  templateUrl:'./corsi.html',
})
export class RemoteEntryComponent implements OnInit{
  utente!:user;
  async ngOnInit(){
      this.utente=JSON.parse(localStorage.getItem('utente')!)
  }
}
