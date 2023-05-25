/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunniBackService } from '@istruzione/shared/registro';
import { AuthService } from '../auth.service';
import { Observable, map, startWith } from 'rxjs';
import { user } from 'libs/shared/registro/src/lib/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'istruzione-update-alunno',
  templateUrl: './update-alunno.component.html',
  styleUrls: ['./update-alunno.component.scss'],
})
export class UpdateAlunnoComponent implements OnInit{
  stateCtrl = new FormControl('');
  filteredAlunni!: Observable<user[]>;
  selected!:string;
  alunno!: user;
  toUpdate:user={
    "classe":"",
    "cognome":"",
    "email":"",
    "id":"",
    "nome":"",
    "type":1
  };

  alunni!:user[];
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
  constructor( private _snackBar:MatSnackBar,private _formBuilder:FormBuilder,private auth:AuthService,private alunniService:AlunniBackService,private router:Router){
    this.filteredAlunni = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(alunno => (alunno ? this._filteralunni(alunno) : this.alunni.slice())),
    );
  }
  tryvalue(){
    let a=this.alunniService.getAlunnobyID(this.stateCtrl.value)!
    this.toUpdate=a;
  }
  private _filteralunni(value: string): user[] {
    const filterValue = value.toLowerCase();
    return this.alunni.filter(al => al.nome.toLowerCase().includes(filterValue)|| al.cognome.toLowerCase().includes(filterValue)|| al.id.includes(filterValue));
  }
  ngOnInit(){
    this.alunni=this.alunniService.getAllAlunni()
  }
  updateAlunno(){
    this.alunniService.updateAlunno(this.toUpdate)
    this.router.navigate(['/home/docente'])
  }

}
