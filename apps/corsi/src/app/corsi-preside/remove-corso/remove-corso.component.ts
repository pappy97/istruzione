/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CorsoService, DocenteService } from '@istruzione/shared/registro';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { corso } from 'libs/shared/registro/src/lib/interfaces';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'istruzione-remove-corso',
  templateUrl: './remove-corso.component.html',
  styleUrls: ['./remove-corso.component.scss'],
})
export class RemoveCorsoComponent implements OnInit{
  stateCtrl = new FormControl('');
  filteredCorsi!: Observable<corso[]>;
  corsi!:corso[]
  corso!: corso;
  toUpdate:corso={
    "classe":"",
    "isConfirmed":false,
    "docenti":[],
    "id":"",
    "titolo":""
  };

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
  removeCorso(){
    this.corsiService.removeCorso(this.toUpdate)
    this.router.navigate(['/home/docente'])
  }
}

