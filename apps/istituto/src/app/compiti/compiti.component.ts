/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompitiService, CorsoService } from '@istruzione/shared/registro';
import { user, compito } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-compiti',
  templateUrl: './compiti.component.html',
  styleUrls: ['./compiti.component.scss'],
})
export class CompitiComponent {
  utente!:user;
  compiti!:compito[];
  panelOpenState=false;
  constructor(private comp:CompitiService,private cor:CorsoService,private router:Router){}
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!);
  }
  getCompiti(){
    this.compiti= this.comp.getCompitiByClasse(this.utente.classe);
    return this.compiti
  }
  getCorso(id:string){
    return this.cor.getCorsoById(id)?.titolo;
  }

}
