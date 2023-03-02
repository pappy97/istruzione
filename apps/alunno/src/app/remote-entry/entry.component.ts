/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { AlunniService } from "@istruzione/shared/registro";

@Component({
  selector: 'istruzione-alunno-entry',
  templateUrl: './alunni.html',
  styleUrls:['./alunni.scss']
})
export class RemoteEntryComponent {
  alunni:any
  selected:any
  a:any
  constructor(alunniService:AlunniService){
    this.alunni=alunniService.getAlunni();
    this.a=alunniService
  }
  goToAlunno(id:string,){
    this.selected=this.a.getAlunnoById(id)
  }
}
