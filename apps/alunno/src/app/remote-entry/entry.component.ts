/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { AlunniService } from "@istruzione/shared/registro";
import { Router } from "@angular/router";
@Component({
  selector: 'istruzione-alunno-entry',
  templateUrl: './alunni.html',
  styleUrls:['./alunni.scss']
})
export class RemoteEntryComponent {
  alunni:any
  panelOpenState = false;
  constructor(private alunniService:AlunniService, private router:Router){
    this.alunni=alunniService.getAlunni();
  }

  goToClasse(classe:string){
    this.router.navigate([ { outlets: {classe:['alunno',classe] } } ])
  }
  goToAlunno(id:string){
    this.router.navigate([ { outlets: {alunno:['alunno',id] } } ])
  }
}
