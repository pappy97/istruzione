import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ClasseService, CorsoService, DocenteService } from '@istruzione/shared/registro';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'istruzione-classe-preside-docenti',
  templateUrl: './docenti.component.html',
  styleUrl: './docenti.component.scss',
})
export class DocentiComponent {
  @Input() classe: any;
  dataSource: any;
  showAdd = false;
  displayedColumns: string[] = ['Docente', 'Materia', 'Azioni'];
  loading = false;
  constructor(
    private docentiService: DocenteService,
    private classeService: ClasseService,
    private corsiService: CorsoService,
    private _formBuilder: FormBuilder
  ) {}
  docenti: any[] = [];
  materie: any[] = [];
  assegnazioneForm!: FormGroup;

  async ngOnInit() {
    console.log('CLASSE', this.classe);

    this.assegnazioneForm = this._formBuilder.group({
      docente: ['', [Validators.required]],
      materia: ['', [Validators.required]],
    });
    this.docentiService
      .getAssegnazioneByClasse(this.classe.nome)
      .subscribe(async (assegnazioni) => {
        const result = await Promise.all(
          assegnazioni.map(async (ass) => {
            const docente = await firstValueFrom(
              this.docentiService.getDocenteById(ass.docente)
            );
            const materia = await firstValueFrom(
              this.corsiService.getCorsoById(ass.materia)
            );
            return {
              ...ass,
              docente: docente
                ? `${docente.nome} ${docente.cognome}`
                : ass.docente,
              materia: materia ? materia.nome : ass.materia,
            };
          })
        );
        this.dataSource = new MatTableDataSource(result);
      });
    this.docentiService.getDocenti().subscribe((data) => {
      this.docenti = data;
    });
    this.corsiService.getCorsi().subscribe((data) => {
      this.materie = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onBack() {
    console.log('CIAO');
    this.showAdd = false;
  }
  async saveAssegnazione() {
    this.loading = true;
    try {
      await this.docentiService.addAssegnazione({
        classe: this.classe.nome,
        materia: this.assegnazioneForm.controls['materia'].value,
        docente: this.assegnazioneForm.controls['docente'].value
      })
      this.showAdd = false;
    }
    catch (error) {
      console.error(error)
    }
    finally {
      this.loading = false;
    }
    console.log('CIAO', this.assegnazioneForm.controls);
  }
  get f() {
    return this.assegnazioneForm.controls;
  }
  get isValid() {
    return this.assegnazioneForm.valid;
  }
}
