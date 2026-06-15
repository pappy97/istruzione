/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { AlunniBackService, CompitiService, DocenteService, LezioniService, RegistroService } from '@istruzione/shared/registro';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'istruzione-registro-entry',
  templateUrl: './registro.html',
  styleUrls:['./registro.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RemoteEntryComponent  {
classe = '3A';
role = 0;
dataLezione = new Date();

argomento = '';

presenzeColumns = [
  'studente',
  'presente'
];

votiColumns = [
  'studente',
  'voto'
];

noteColumns = [
  'studente',
  'nota'
];

presColumns = [
  'classe',
  'presenti',
  'assenti'
];

classi = new MatTableDataSource([
  {
    id: '1',
    nome: '1A',
    presenti: 2,
    assenti: 2,
  },
  {
    id: '2',
    nome: '2A',
    presenti: 2,
    assenti: 2,
  },
  {
    id: '3',
    nome: '3A',
    presenti: 2,
    assenti: 2,
  },
]);
dataSource = new MatTableDataSource([
  {
    id: '1',
    nome: 'Mario',
    cognome: 'Rossi',
    presente: true,
    voto: null,
    nota: ''
  },
  {
    id: '2',
    nome: 'Luca',
    cognome: 'Bianchi',
    presente: true,
    voto: null,
    nota: ''
  }
]);

salvaRegistro() {

  const registro = {
    classe: this.classe,
    data: this.dataLezione,
    argomento: this.argomento,
    studenti: this.dataSource.data
  };

  console.log(registro);

  // firestore addDoc(...)
}

}
