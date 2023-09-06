/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-docente-entry',
  templateUrl: `./docente.html`,
  styleUrls:['./docente.scss']
})
export class RemoteEntryComponent implements OnInit{
  docente!:user
  type!: number;
  selected=0;
  constructor(private router:Router){
  }
  ngOnInit(){

    this.docente=JSON.parse(localStorage.getItem("utente")!)
    this.type=this.docente.type;
  }
}
