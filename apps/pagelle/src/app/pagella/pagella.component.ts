/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { RetriveDBService } from '@istruzione/shared/registro';
import { user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-pagella',
  templateUrl: './pagella.component.html',
  styleUrls: ['./pagella.component.scss'],
})
export class PagellaComponent implements OnInit{
  utente!:user;
  constructor (private db:RetriveDBService){}
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!)
  }
}
