import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunniService } from '@istruzione/shared/registro';

/* eslint-disable */

@Component({
  selector: 'istruzione-nx-welcome',
  templateUrl:'./nxcomp.html',
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  alunno:any
  constructor(private router:ActivatedRoute,alunniService:AlunniService){
    router.params.subscribe(p=>{
      this.alunno=alunniService.getAlunnoById(p['id'])
    })
  }
}
