import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, DocenteService, user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-inserimento-docente',
  templateUrl: './inserimento-docente.component.html',
  styleUrls: ['./inserimento-docente.component.scss'],
})
export class InserimentoDocenteComponent {
  _Classi=["1A","2A","3A","4A","5A","1B","2B","3B","4B","5B","1C","2C","3C","4C","5C"]
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    first2Ctrl: ['', Validators.required],

  });
 secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    second2Ctrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  nome!:string;
  cognome!:string;
  email!:string;
  classe!:string;
  password!:string;
  constructor(private _formBuilder:FormBuilder,private auth:AuthService,private docenti:DocenteService,private router:Router){}
  saveDocente(){
    const a:user={
      "classe":[],
      "cognome":this.cognome,
      "email":this.email,
      "id":this.docenti.getNewID(),
      "nome":this.nome,
      "type":2
    }
    this.auth.SignUp(this.email,this.password)
    this.docenti.addDocente(a);
    this.router.navigate(['/home/docente'])
  }
}
