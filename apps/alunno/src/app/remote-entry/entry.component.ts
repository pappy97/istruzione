/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component,OnInit } from '@angular/core';
import { AlunniBackService,user } from "@istruzione/shared/registro";
import { Router } from "@angular/router";
@Component({
  selector: 'istruzione-alunno-entry',
  templateUrl: './alunni.html',
  styleUrls:['./alunni.scss']
})
export class RemoteEntryComponent implements OnInit{
  utente!:user;
  constructor(private router:Router){
  }
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem("utente")!);
  }

  goToClasse(classe:string){

    this.router.navigate(['classe',classe])
  }
  goToAlunno(id:string){
    this.router.navigate(['alunno',id])
  }
}
