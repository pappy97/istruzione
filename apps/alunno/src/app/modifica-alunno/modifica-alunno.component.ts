import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { user, AlunniBackService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-modifica-alunno',
  templateUrl: './modifica-alunno.component.html',
  styleUrl: './modifica-alunno.component.scss',
})
export class ModificaAlunnoComponent implements OnInit {
  @Output() backPress = new EventEmitter();
  @Input() alunno!: user;
  loading = false;
  alunnoForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private alunniService: AlunniBackService,
    private router: Router,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('it-IT');
  }

  onBack() {
    this.backPress.emit();
  }

  ngOnInit() {
    this.alunnoForm = this._formBuilder.group({
      nome: [
        this.alunno?.nome ?? '',
        [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/)],
      ],
      cognome: [
        this.alunno?.cognome ?? '',
        [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/)],
      ],
      cf: [
        this.alunno?.cf ?? '',
        [Validators.required, Validators.pattern(/^[A-Z0-9]{16}$/)],
      ],
      birthDate: [this.alunno?.dataNascita ?? '', [Validators.required]],
      birthPlace: [this.alunno?.luogoNascita ?? '', [Validators.required]],
      email: [
        this.alunno?.email ?? '',
        [Validators.required, Validators.email],
      ],
      telefono: [
        this.alunno?.telefono ?? '',
        [Validators.required, Validators.pattern(/^[0-9]{9,10}$/)],
      ],
      indirizzo: [
        this.alunno?.indirizzo ?? '',
        [Validators.required, Validators.minLength(5)],
      ],
      classe: [this.alunno?.classe ?? '', [Validators.required]],
      annoScolastico: [
        this.alunno?.annoScolastico ?? '',
        [Validators.required, Validators.pattern(/^\d{4}\/\d{4}$/)],
      ],
    });
  }

  async updateAlunno() {
    this.loading = true;
    try {
      await this.alunniService.updateAlunno({
        ...this.alunno,
        nome: this.alunnoForm.controls['nome'].value,
        cognome: this.alunnoForm.controls['cognome'].value,
        cf: this.alunnoForm.controls['cf'].value,
        dataNascita: this.alunnoForm.controls['birthDate'].value,
        luogoNascita: this.alunnoForm.controls['birthPlace'].value,
        email: this.alunnoForm.controls['email'].value,
        telefono: this.alunnoForm.controls['telefono'].value,
        indirizzo: this.alunnoForm.controls['indirizzo'].value,
        classe: this.alunnoForm.controls['classe'].value,
        annoScolastico: this.alunnoForm.controls['annoScolastico'].value,
        tipo: 1,
      });
      this.backPress.emit();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
  get f() {
    return this.alunnoForm.controls;
  }
  get isValid() {
    return this.alunnoForm.valid && this.alunnoForm.dirty;
  }
}