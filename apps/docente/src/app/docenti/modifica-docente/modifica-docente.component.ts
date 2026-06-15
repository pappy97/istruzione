/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user, DocenteService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-modifica-docente',
  templateUrl: './modifica-docente.component.html',
  styleUrls: ['./modifica-docente.component.scss'],
})
export class ModificaDocenteComponent implements OnInit {
  @Output() backPress = new EventEmitter();
  @Input() docente!: user;
  docenteForm!: FormGroup;
  loading = false;

  constructor(
    private _formBuilder: FormBuilder,
    private docentiService: DocenteService
  ) {}

  onBack() {
    this.backPress.emit();
  }

  ngOnInit(): void {
    this.docenteForm = this._formBuilder.group({
      nome: [
        this.docente?.nome ?? '',
        [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/)],
      ],
      cognome: [
        this.docente?.cognome ?? '',
        [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/)],
      ],
      cf: [
        this.docente?.cf ?? '',
        [Validators.required, Validators.pattern(/^[A-Z0-9]{16}$/)],
      ],
      birthDate: [this.docente?.dataNascita ?? '', [Validators.required]],
      birthPlace: [this.docente?.luogoNascita ?? '', [Validators.required]],
      email: [
        this.docente?.email ?? '',
        [Validators.required, Validators.email],
      ],
      telefono: [
        this.docente?.telefono ?? '',
        [Validators.required, Validators.pattern(/^[0-9]{9,10}$/)],
      ],
      indirizzo: [
        this.docente?.indirizzo ?? '',
        [Validators.required, Validators.minLength(5)],
      ],
    });
  }

  async saveDocente() {
    this.loading = true;
    try {
      await this.docentiService.updateDocente({
        ...this.docente,
        nome: this.docenteForm.controls['nome'].value,
        cognome: this.docenteForm.controls['cognome'].value,
        cf: this.docenteForm.controls['cf'].value,
        dataNascita: this.docenteForm.controls['birthDate'].value,
        luogoNascita: this.docenteForm.controls['birthPlace'].value,
        email: this.docenteForm.controls['email'].value,
        telefono: this.docenteForm.controls['telefono'].value,
        indirizzo: this.docenteForm.controls['indirizzo'].value,
        tipo: 2,
      });
      this.onBack();
    } catch (error) {
      console.error('ERRORE', error);
    } finally {
      this.loading = false;
    }
  }

  get f() {
    return this.docenteForm.controls;
  }

  get isValid() {
    return this.docenteForm.valid && this.docenteForm.dirty;
  }

}
