import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlunniBackService, ClasseService, user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-classe-preside-studenti',
  templateUrl: './studenti.component.html',
  styleUrl: './studenti.component.scss',
})
export class StudentiComponent implements OnInit, AfterViewInit {
  @Input() classe: any;
  dataSource = new MatTableDataSource<user>();
  showAdd = false;
  displayedColumns: string[] = [
    'nome',
    'cognome',
    'dataNascita',
    'email',
    'Azioni',
  ];
  noClassStudent: any;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private alunniService: AlunniBackService,
    private classeService: ClasseService
  ) {}

  async ngOnInit() {
    let studenti = await this.alunniService.getAlunnibyClasse(this.classe.nome);
    this.dataSource.data = studenti ?? [];
    this.noClassStudent = await this.alunniService.getAlunniNoClasse();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
