/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { corso, user, CorsoService, DocenteService } from '@istruzione/shared/registro';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'istruzione-modificacorso',
  templateUrl: './modificacorso.component.html',
  styleUrls: ['./modificacorso.component.scss'],
})
export class ModificacorsoComponent implements OnInit{
  stateCtrl = new FormControl('');
  filteredCorsi!: Observable<corso[]>;
  selected!:string;
  corsi!:corso[]
  corso!: corso;
  addprofessore:any;
  remprof:any;
  toUpdate:corso={
    "classe":"",
    "isConfirmed":false,
    "docenti":[],
    "id":"",
    "titolo":""
  };

  docenti!:user[];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],

  });
 secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder:FormBuilder,private corsiService:CorsoService,private router:Router,private doc:DocenteService){
    this.corsi=this.corsiService.getAllCorsiConfirmed();
    this.filteredCorsi = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(corso => (corso ? this._filtercorsi(corso) : this.corsi.slice())),
    );
  }
  getnotProf(){
    return this.doc.getAllDocenti().filter(e=>  !(this.toUpdate.docenti.includes(e.id)))
  }
  getProf(){
    return this.doc.getAllDocenti().filter(e=>  (this.toUpdate.docenti.includes(e.id)))
  }
  tryvalue(){
    const a=this.corsiService.getCorsoById(this.stateCtrl.value!)!
    this.toUpdate=a;
  }
  private _filtercorsi(value: string): corso[] {
    const filterValue = value.toLowerCase();
    return this.corsi.filter(al => al.titolo.toLowerCase().includes(filterValue)||al.id.includes(filterValue));
  }
  ngOnInit(){
    this.corsiService.getCorsi()
  }
  updateCorso(){
    this.toUpdate.docenti=this.toUpdate.docenti.filter(e=>!e.includes(this.remprof))
    this.toUpdate.docenti.push(this.addprofessore);
    this.corsiService.UpdateCorso(this.toUpdate)
    this.router.navigate(['/home/docente'])
  }
}
