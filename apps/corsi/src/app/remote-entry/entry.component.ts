/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component,OnInit } from '@angular/core';
import { CorsoService, RetriveDBService } from '@istruzione/shared/registro';
import { corso, user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-corsi-entry',
  templateUrl:'./corsi.html',
})
export class RemoteEntryComponent implements OnInit{
  utente!:user;
  constructor(private db:RetriveDBService){}
  async ngOnInit(){
    this.db.retrivedb();
      this.utente=JSON.parse(localStorage.getItem('utente')!)
  }
}
