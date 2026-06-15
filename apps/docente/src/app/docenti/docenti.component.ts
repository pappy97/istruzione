/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CorsoService, DocenteService, LezioniService, RegistroService, lezione, user, verifica } from '@istruzione/shared/registro';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'istruzione-docenti',
  templateUrl: './docenti.component.html',
  styleUrls: ['./docenti.component.scss'],
})
export class DocentiComponent implements OnInit,AfterViewInit {
  utente!: user;
  docenti: user[] = [];
  voti: verifica[] = [];
  lezioni: lezione[] = [];
  showadd = false;
  showupdate = false;
  showremove = false;
  displayedColumns = ['nome', 'cognome', 'email', 'azioni'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  totDocenti = 0;
  totClassi = 0;
  totMaterie = 0;
  panelOpenState = false;
  selected: any;
  constructor(private router: Router, private docenteservice: DocenteService,private corsoService: CorsoService) {}

  ngOnInit() {
    this.docenteservice.getDocenti().subscribe(async (data) => {
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addDocente() {
    console.log('nuovo docente');
  }

  editDocente(docente: any) {
    this.selected = docente;
    this.showupdate = true;
  }

  deleteDocente(docente: any) {
    console.log(docente);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
