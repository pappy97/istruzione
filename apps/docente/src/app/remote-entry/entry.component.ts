/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { DocenteService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-docente-entry',
  templateUrl: `./docente.html`,
  styleUrls:['./docente.scss']
})
export class RemoteEntryComponent {
  docenti:any
  constructor(DocenteService:DocenteService){
    this.docenti=DocenteService.getDocenti()
    console.log(DocenteService.getDocentiByClass("2A"))
  }
}
