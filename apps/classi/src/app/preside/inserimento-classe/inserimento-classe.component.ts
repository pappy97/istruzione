import { Component, EventEmitter, Output } from '@angular/core';
import { ClasseService, DocenteService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-classe-preside-inserimento-classe',
  templateUrl: './inserimento-classe.component.html',
  styleUrl: './inserimento-classe.component.scss',
})
export class InserimentoClasseComponent {
  @Output() backPress = new EventEmitter();
  classe: any = {
    nome: '',
    anno: '',
    sezione: '',
    coordinatoreId: '',
    maxStudenti: 30,
  };

  docenti: any[] = [];
  constructor(
    private docentiService: DocenteService,
    private classiService: ClasseService
  ) {}

  ngOnInit() {
    this.docentiService.getDocenti().subscribe((data) => {
      this.docenti = data;
    });
  }
  onBack() {
    this.backPress.emit();
  }

  saveClasse() {
    this.classiService.addClasse({ ...this.classe,nome:this.classe.anno+this.classe.sezione });
  }
}
