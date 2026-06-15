import { Component, Input } from '@angular/core';

@Component({
  selector: 'istruzione-classi-studenti-dasboard-classe',
  templateUrl: './dasboard-classe.component.html',
  styleUrl: './dasboard-classe.component.scss',
})
export class StudenteDasboardClasseComponent {
  @Input() classe!: string;
}
