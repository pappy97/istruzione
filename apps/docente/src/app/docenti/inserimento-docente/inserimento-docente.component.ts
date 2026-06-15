import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService, DocenteService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-inserimento-docente',
  templateUrl: './inserimento-docente.component.html',
  styleUrls: ['./inserimento-docente.component.scss'],
})
export class InserimentoDocenteComponent implements OnInit{
  @Output() backPress = new EventEmitter;
  docenteForm!:FormGroup;
  loading=false;
  
  constructor(private _formBuilder: FormBuilder, private auth: AuthService, private docentiService: DocenteService, private router: Router, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('it-IT');
  }
  
  onBack(){
    this.backPress.emit();
  }
  
  ngOnInit(): void {
    this.docenteForm = this._formBuilder.group({
      nome: ['',[Validators.required,Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/)]],
      cognome: ['',[Validators.required,Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/)]],
      cf: ['',[Validators.required,Validators.pattern(/^[A-Z0-9]{16}$/)]],
      birthDate: ['',[Validators.required]],
      birthPlace: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      telefono: ['',[Validators.required,Validators.pattern(/^[0-9]{9,10}$/)]],
      indirizzo: ['',[Validators.required,Validators.minLength(5)]]
    })
  }
  
  async saveDocente() {
    this.loading = true;
    try {
      await this.docentiService.addDocente({
        nome: this.docenteForm.controls['nome'].value,
        cognome: this.docenteForm.controls['cognome'].value,
        cf: this.docenteForm.controls['cf'].value,
        dataNascita: this.docenteForm.controls['birthDate'].value,
        luogoNascita: this.docenteForm.controls['birthPlace'].value,
        email: this.docenteForm.controls['email'].value,
        password: this.docenteForm.controls['password'].value,
        telefono:this.docenteForm.controls['telefono'].value,
        indirizzo:this.docenteForm.controls['indirizzo'].value,
        tipo: 2
      });
      this.router.navigate(['']);
    }catch(error){
      console.error('ERRORE',error)
    }finally{
      this.loading = false
    }
  }
  
  get f() {
    return this.docenteForm.controls;
  }
  
  get isValid(){
    return this.docenteForm.valid
  }
}
