/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {  CorsoService, LezioniService } from '@istruzione/shared/registro';
import { lezione,  } from 'libs/shared/registro/src/lib/interfaces';


@Component({
  selector: 'istruzione-insert-lezione',
  templateUrl: './insert-lezione.component.html',
  styleUrls: ['./insert-lezione.component.scss'],
  providers:[DatePipe]

})
export class InsertLezioneComponent implements OnInit{
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
  tosave!: lezione;
  l:any;
  utente:any;
  constructor(private d:DatePipe,private router:Router,private lezioni:LezioniService,private corsiService:CorsoService,private _formBuilder: FormBuilder,){}
  ngOnInit(): void {
    this.utente=JSON.parse(localStorage.getItem('utente')!)

    this.corsiService.getCorsi()
    this.lezioni.getLezioni()
  }
  getCorsi(){
    this.corsi=this.corsiService.getCorsiByProfessore(this.utente.id);
  }

  saveLezione(){
    let data= new Date();
    let tosave:lezione;
    tosave={
      "classe":this.selected,
      "corso":this.corso,
      "data":""+this.d.transform(data,'yyyy-MM-dd'),
      "descrizione":this.descrizione,
      "docente":this.utente.id,
      "id":this.lezioni.getNewId(this.corso,this.selected)
    }
    this.lezioni.addLezione(tosave);
    this.router.navigate(['/'])
  }
  goBack(){
    this.router.navigate(['/'])
  }
}
