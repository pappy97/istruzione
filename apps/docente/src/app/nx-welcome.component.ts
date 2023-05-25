import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteService } from '@istruzione/shared/registro';

/* eslint-disable */

@Component({
  selector: 'istruzione-nx-welcome',
  templateUrl:'./nxcomp.html',
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  docente:any
  constructor(private Arouter:ActivatedRoute,private docenteService:DocenteService,private router:Router){
    Arouter.params.subscribe(p=>{
      this.docente=docenteService.getDocenteById(p['id'])
    })
  }
  goToClasse(classe:string){
   this.router.navigate([ { outlets: {classe:['classe',classe] } } ])
  }
}
