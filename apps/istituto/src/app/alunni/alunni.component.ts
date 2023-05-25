/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { AlunniBackService } from '@istruzione/shared/registro';
import { user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-alunni',
  templateUrl: './alunni.component.html',
  styleUrls: ['./alunni.component.scss'],
})
export class AlunniComponent implements OnInit{
  panelOpenState=false;
  utente!:user;
  showadd=true;
  showremove=true;
  showupdate=true;
  constructor(private al:AlunniBackService){}
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!)
  }
}
