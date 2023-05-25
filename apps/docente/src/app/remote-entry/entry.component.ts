/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'istruzione-docente-entry',
  templateUrl: `./docente.html`,
  styleUrls:['./docente.scss']
})
export class RemoteEntryComponent implements OnInit{
  docente:any
  constructor(private router:Router){
  }
  ngOnInit(){
    this.docente=JSON.parse(localStorage.getItem("utente")!)
  }
  goToclass(id:string){
    this.router.navigate(['classe',id])
  }
}
