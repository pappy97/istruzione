/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetriveDBService, user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-root',
  templateUrl: `./app-docente.html`,
  styleUrls:['./app-docente.scss']
})
export class AppComponent implements OnInit{
  selected=0;
  type!:number;
  utente!:user
  constructor(private router:Router,private db:RetriveDBService){
  }
  ngOnInit() {
    this.utente=JSON.parse(localStorage.getItem('utente')!)
    this.type=this.utente.type

    this.db.retrivedb()
  }

}
