import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { user } from 'libs/shared/registro/src/lib/interfaces';
import { AuthService } from '../auth.service';
import { AlunniBackService } from '@istruzione/shared/registro';
import { Router } from '@angular/router';

@Component({
  selector: 'istruzione-insert-alunno',
  templateUrl: './insert-alunno.component.html',
  styleUrls: ['./insert-alunno.component.scss'],
})
export class InsertAlunnoComponent {
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
  constructor(private _formBuilder:FormBuilder,private auth:AuthService,private alunni:AlunniBackService,private router:Router){}
  saveAlunno(){
    const a:user={
      "classe":this.classe,
      "cognome":this.cognome,
      "email":this.email,
      "id":this.alunni.getNewID(),
      "nome":this.nome,
      "type":1
    }
    this.auth.SignUp(this.email,this.password)
    this.alunni.addAlunno(a);
    this.router.navigate(['/home/docente'])
  }
}
