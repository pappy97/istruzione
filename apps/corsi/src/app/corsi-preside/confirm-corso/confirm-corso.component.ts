/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CorsoService, DocenteService } from '@istruzione/shared/registro';
import { corso, user } from 'libs/shared/registro/src/lib/interfaces';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'istruzione-confirm-corso',
  templateUrl: './confirm-corso.component.html',
  styleUrls: ['./confirm-corso.component.scss'],
})
export class ConfirmCorsoComponent implements OnInit{
  stateCtrl = new FormControl('');
  filteredCorsi!: Observable<corso[]>;
  selected!:string;
  corsi!:corso[]
  addprofessore:any;
  remprof:any;


  docenti!:user[];
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],

  });
  constructor(private _formBuilder:FormBuilder,private corsiService:CorsoService,private router:Router){  }

  getCorsi(){
    return this.corsiService.getAllCorsiNotConfirmed();
  }
  ngOnInit(){
    this.corsi=this.corsiService.getAllCorsiNotConfirmed();

  }
  updateCorso(){
    this.corsiService.ConfirmCorso(this.selected)
    this.router.navigate(['/home/docente'])
  }
}
