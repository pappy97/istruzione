/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CorsoService, DocenteService } from '@istruzione/shared/registro';
import { corso, user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-insertcorso',
  templateUrl: './insertcorso.component.html',
  styleUrls: ['./insertcorso.component.scss'],
})
export class InsertcorsoComponent implements OnInit{
  _Classi=["1A","2A","3A","4A","5A","1B","2B","3B","4B","5B","1C","2C","3C","4C","5C"]
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
 secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  utente!:user;
  selected:any;
  titolo="";
  prof:any;
  tosave!:corso;
  ngOnInit(): void {
      this.utente=JSON.parse(localStorage.getItem('utente')!)
  }

  constructor(private _formBuilder:FormBuilder,private router:Router,private doc:DocenteService,private corso:CorsoService){}
  goBack(){
    this.router.navigate(['/'])
  }
  getDocenti(){
    return this.doc.getAllDocenti()
  }

  getDocentiTosave(){
    const i=this.doc.getDocenteById(this.utente.id)
    if(this.prof!="-1") {
      const d=this.doc.getDocenteById(this.prof)
    return i?.cognome+" "+d?.cognome
    }
    return i?.cognome
  }
  saveCorso(){
    let docs=[this.utente.id];
    if(this.prof!="-1") docs.push(this.prof)
    this.tosave={
    "classe":this.selected,
    "docenti":docs,
    "id":this.corso.getNewId(),
    "titolo":this.titolo
    }
    this.corso.addCorso(this.tosave)
    console.log(this.tosave)
    this.router.navigate(['/'])
  }
}
