/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompitiService, CorsoService } from '@istruzione/shared/registro';
import { compito, corso, user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-compiti',
  templateUrl: './compiti.component.html',
  styleUrls: ['./compiti.component.scss'],
})
export class CompitiComponent implements OnInit{
  @Input() classe:any
  utente!:user;
  compiti!:compito[];
  panelOpenState=false;
  constructor(private comp:CompitiService,private cor:CorsoService,private router:Router){}
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!);
  }
  getCompiti(){
    this.compiti= this.comp.getCompitiByClasseAndProfessor(this.classe,this.utente.id);
    return this.compiti
  }
  getCorso(id:string){
    return this.cor.getCorsoById(id)?.titolo;
  }
  goToinsert(){
    this.router.navigate([this.router.url+'/insertcompito'])
  }

}
