import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlunniBackService, ClasseService, CorsoService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-corsi-preside-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false,
})
export class DashboardCorsiPresideComponent implements OnInit {
  role = 'preside';
  @Input() classe: any;
  dataSource: any;
  showAdd = false;
  displayedColumns: string[] = [
    'Nome',
    'Descrizione',
    'Azioni',
  ];
  noClassStudent: any;

  constructor(
    private corsiService: CorsoService,
  ) {}

  async ngOnInit() {
    await this.corsiService.getCorsi().subscribe(corsi => {
      this.dataSource = new MatTableDataSource(corsi ?? []);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
