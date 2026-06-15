import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClasseService, DocenteService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-classi-preside-classi',
  templateUrl: './classi.component.html',
  styleUrl: './classi.component.scss',
})
export class PresideClassiComponent implements OnInit{
  showAdd = false;
  showUpdate = false;
  displayedColumns: string[] = [
    'Classe',
    'Coordinatore',
    'numStudenti',
    'Azioni',
  ];
  dataSource: any;
  selectedClass: any;

  constructor(private classeService: ClasseService, private docenteService:DocenteService) { }
  
  ngOnInit(): void {
    this.classeService.getClassi().subscribe((classi) => {
      this.docenteService.getDocenti().subscribe((docenti) => {
        const table = classi.map(classe => {
          const coordinatore = docenti.find(d => d.id === classe.coordinatoreId);
          return {
            ...classe,
            coordinatore: coordinatore? `${coordinatore.nome} ${coordinatore.cognome}`: ''
          };
        });
        this.dataSource = new MatTableDataSource(table);
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(classe: any) {
    console.log(classe)
    this.selectedClass = classe;
    this.showUpdate = true;
  }

  nomeCordinatore(idDocente: string) {
    let toreturn = '' 
    // this.docenteService.getDocenteById(idDocente).subscribe(docente => {
    //   if (docente) {
    //     toreturn = docente?.nome + docente?.cognome;
    //   }
    // });
    return toreturn;
  }
}
