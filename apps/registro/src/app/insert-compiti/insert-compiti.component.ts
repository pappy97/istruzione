/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LezioniService, CorsoService, CompitiService } from '@istruzione/shared/registro';
import { compito } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-insert-compiti',
  templateUrl: './insert-compiti.component.html',
  styleUrls: ['./insert-compiti.component.scss'],
  providers:[DatePipe]
})
export class InsertCompitiComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
 secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  selected:any;
  descrizione:any;
  corso:any;
  corsi:any;
  tosave!: compito;
  l:any;
  utente:any;
  constructor(private d:DatePipe,private router:Router,private lezioni:LezioniService,private comp:CompitiService,private corsiService:CorsoService,private _formBuilder: FormBuilder,){}
  ngOnInit(): void {
    this.utente=JSON.parse(localStorage.getItem('utente')!)

    this.corsiService.getCorsi()
    this.lezioni.getLezioni()
  }
  getCorsi(){
    this.corsi=this.corsiService.getCorsiByProfessore(this.utente.id);
  }
  getClassi(){
    return this.utente.classe
  }

  saveCompito(){
    let data= new Date();
    let tosave:compito;
    tosave={
      "classe":this.selected,
      "corso":this.corso,
      "data":""+this.d.transform(data,'yyyy-MM-dd'),
      "description":this.descrizione,
      "professore":this.utente.id,
      "id":this.comp.getNewId(this.corso,this.selected)
    }
    this.comp.addCompito(tosave);
    this.router.navigate(['/'])
  }
  goBack(){
    this.router.navigate(['/'])
  }
  getCorso(id:string){
    return this.corsiService.getCorsoById(id)?.titolo
  }
}
