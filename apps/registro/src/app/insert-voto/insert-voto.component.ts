/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { AlunniBackService, CorsoService, RegistroService } from '@istruzione/shared/registro';
import { user, verifica, voto } from 'libs/shared/registro/src/lib/interfaces';

import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'istruzione-insert-voto',
  templateUrl: './insert-voto.component.html',
  styleUrls: ['./insert-voto.component.scss'],
  providers:[DatePipe]
})
export class InsertVotoComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
 secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  selected:any;
  type = 0;
  corso:any;
  corsi:any;
  alunni:user[]=[];
  voti:any[]=[];
  tosave!: verifica;
  picker:any;
  data:any;
  maxDate= new Date()
  utente:any;
  constructor(private d:DatePipe,private router:Router,private alunniback:AlunniBackService,private corsiService:CorsoService,private _formBuilder: FormBuilder,private verifiche:RegistroService){}
  ngOnInit(): void {
    this.utente=JSON.parse(localStorage.getItem("utente")!)
    this.alunniback.getAlunni()
    this.corsiService.getCorsi()
    this.verifiche.getVerifiche()
  }
  myFilter (d: Date | null){
    const day = (d || new Date()).getDay();
    return day !== 0 ;
  }
  getCorsi(){
    this.corsi=this.corsiService.getCorsiByProfessore(this.utente.id);
  }
  getAlunni(){
    this.alunni= this.alunniback.getAlunnibyClasse(this.selected)
    for(let i=0; i<this.alunni.length;i++){
      this.voti[i]='a';
    }
  }
  saveVoti(){

    let i=0;
    let v:voto[]=[];
    for (let index = 0; index < this.voti.length; index++) {

      if(this.voti[index]!=='a'){
        v[i]={
          "alunno":this.alunni[index].id,
          "voto":this.voti[index]
        }
        i=i+1
      }
    }
    this.tosave={
      "classe":this.selected,
      "type":this.type,
      "corso":this.corso,
      "data":""+this.d.transform(this.data,'yyyy-MM-dd'),
      "professore":this.utente.id,
      "voti":v,
      "id":this.verifiche.getNewId(this.corso,this.selected)
    }
    console.log(this.tosave);
    this.verifiche.storeVerifiche(this.tosave);
    this.router.navigate(['/'])
  }
  goBack(){
    this.router.navigate(['/'])
  }
}
