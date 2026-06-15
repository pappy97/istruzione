import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { AlunniBackService } from '@istruzione/shared/registro';


@Component({
  selector: 'istruzione-inserimento-alunno',
  templateUrl: './inserimento-alunno.component.html',
  styleUrl: './inserimento-alunno.component.scss',
})
export class InserimentoAlunnoComponent implements OnInit{
  @Output() backPress = new EventEmitter();
  alunnoForm!:FormGroup;
  loading=false;

  constructor(private _formBuilder:FormBuilder,private alunni:AlunniBackService,private router:Router,private dateAdapter:DateAdapter<Date>){
    this.dateAdapter.setLocale('it-IT');
  }

  ngOnInit(): void {
    this.alunnoForm = this._formBuilder.group({
      nome: ['',[Validators.required,Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/)]],
      cognome: ['',[Validators.required,Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/)]],
      cf: ['',[Validators.required,Validators.pattern(/^[A-Z0-9]{16}$/)]],
      birthDate: ['',[Validators.required]],
      birthPlace: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      telefono: ['',[Validators.required,Validators.pattern(/^[0-9]{9,10}$/)]],
      indirizzo: ['',[Validators.required,Validators.minLength(5)]],
      classe: ['',[Validators.required]],
      annoScolastico: ['',[Validators.required,Validators.pattern(/^\d{4}\/\d{4}$/)]],
    })
  }
  async saveAlunno(){
    this.loading = true;
    try {
      await this.alunni.addAlunno({
        nome: this.alunnoForm.controls['nome'].value,
        cognome: this.alunnoForm.controls['cognome'].value,
        cf: this.alunnoForm.controls['cf'].value,
        dataNascita: this.alunnoForm.controls['birthDate'].value,
        luogoNascita: this.alunnoForm.controls['birthPlace'].value,
        email: this.alunnoForm.controls['email'].value,
        password: this.alunnoForm.controls['password'].value,
        telefono:this.alunnoForm.controls['telefono'].value,
        indirizzo:this.alunnoForm.controls['indirizzo'].value,
        classe: this.alunnoForm.controls['classe'].value,
        annoScolastico:this.alunnoForm.controls['annoScolastico'].value,
        tipo: 1
      });
      this.router.navigate(['']);
    }catch(error)
    {

      console.error('ERRORE',error)
    }finally{
      this.loading = false
    }
  }
  onBack(){
    this.backPress.emit()
  }

  get f() {
    return this.alunnoForm.controls;
  }
  get isValid(){
    return this.alunnoForm.valid
  }
}