import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlunniBackService, user } from '@istruzione/shared/registro';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'istruzione-gestione-alunni',
  templateUrl: './gestione-alunni.component.html',
  styleUrl: './gestione-alunni.component.scss',
})
export class GestioneAlunniComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  utente!: user;
  showadd = false;
  showremove = true;
  showupdate = false;
  displayedColumns: string[] = [
    'nome',
    'cognome',
    'classe',
    'dataNascita',
    'email',
    'azioni',
  ];
  dataSource = new MatTableDataSource<user>();
  editUser!: user;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private al: AlunniBackService) {}
  ngOnInit() {
    this.al.getAlunni().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  edit(user: any) {
    console.log('CIAO', user);
    this.editUser = user;
    this.showupdate = true;
  }
}
