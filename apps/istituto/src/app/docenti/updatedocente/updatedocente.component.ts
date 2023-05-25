/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'libs/shared/registro/src/lib/interfaces';
import { Observable, startWith, map } from 'rxjs';
import { AuthService } from '../../auth.service';
import { DocenteService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-updatedocente',
  templateUrl: './updatedocente.component.html',
  styleUrls: ['./updatedocente.component.scss'],
})
export class UpdatedocenteComponent implements OnInit{
  stateCtrl = new FormControl('');
  filteredDocenti!: Observable<user[]>;
  selected!:string;
  docente!: user;
  toUpdate:user={
    "classe":"",
    "cognome":"",
    "email":"",
    "id":"",
    "nome":"",
    "type":1
  };

  docenti!:user[];
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
  constructor(private _formBuilder:FormBuilder,private auth:AuthService,private docentiService:DocenteService,private router:Router){
    this.filteredDocenti = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(docente => (docente ? this._filterdocenti(docente) : this.docenti.slice())),
    );
  }
  tryvalue(){
    let a=this.docentiService.getDocenteById(this.stateCtrl.value!)!
    this.toUpdate=a;
  }
  private _filterdocenti(value: string): user[] {
    const filterValue = value.toLowerCase();
    return this.docenti.filter(al => al.nome.toLowerCase().includes(filterValue)|| al.cognome.toLowerCase().includes(filterValue)|| al.id.includes(filterValue));
  }
  ngOnInit(){
    this.docenti=this.docentiService.getAllDocenti()
  }
  updateDocente(){
    this.docentiService.updateDocente(this.toUpdate)
    this.router.navigate(['/home/docente'])
  }
}
