/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunniBackService } from '@istruzione/shared/registro';
import { user } from '@istruzione/shared/registro';
import { Observable, startWith, map } from 'rxjs';
@Component({
  selector: 'istruzione-rimuovi-alunno',
  templateUrl: './rimuovi-alunno.component.html',
  styleUrls: ['./rimuovi-alunno.component.scss'],
})
export class RimuoviAlunnoComponent implements OnInit{
  stateCtrl = new FormControl('');
  filteredAlunni!: Observable<user[]>;
  alunni!:user[];
  constructor(private al:AlunniBackService,private router:Router){
    this.filteredAlunni = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(alunno => (alunno ? this._filteralunni(alunno) : this.alunni.slice())),
    );
  }
  private _filteralunni(value: string): user[] {
    const filterValue = value.toLowerCase();
    return this.alunni.filter(al => al.nome.toLowerCase().includes(filterValue)|| al.cognome.toLowerCase().includes(filterValue)|| al.id.includes(filterValue));
  }
  ngOnInit(){
    this.alunni=this.al.getAllAlunni()
  }
  removeAlunno(){
    this.al.deleteAlunno(this.stateCtrl.value!)
    this.router.navigate(['home/docente'])
  }
}
