/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DocenteService } from '@istruzione/shared/registro';
import { user } from 'libs/shared/registro/src/lib/interfaces';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'istruzione-removedocente',
  templateUrl: './removedocente.component.html',
  styleUrls: ['./removedocente.component.scss'],
})
export class RemovedocenteComponent implements OnInit{
  stateCtrl = new FormControl('');
  filteredDocenti!: Observable<user[]>;
  docenti!:user[];
  constructor(private doc:DocenteService,private router:Router){
    this.filteredDocenti= this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(docente => (docente ? this._filterdocenti(docente) : this.docenti.slice())),
    );
  }
  private _filterdocenti(value: string): user[] {
    const filterValue = value.toLowerCase();
    return this.docenti.filter(al => al.nome.toLowerCase().includes(filterValue)|| al.cognome.toLowerCase().includes(filterValue)|| al.id.includes(filterValue));
  }
  ngOnInit(){
    this.docenti=this.doc.getAllDocenti()
  }
  removeDocente(){
    this.doc.deleteDocente(this.stateCtrl.value!)
    this.router.navigate(['/home/docente'])
  }
}
