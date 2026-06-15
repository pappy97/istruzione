/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-pagella',
  templateUrl: './pagella.component.html',
  styleUrls: ['./pagella.component.scss'],
})
export class PagellaComponent implements OnInit{
  utente!:user;
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!)
  }
}
