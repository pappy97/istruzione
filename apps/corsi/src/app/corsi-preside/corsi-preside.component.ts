/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { AlunniBackService } from '@istruzione/shared/registro';
import { user } from 'libs/shared/registro/src/lib/interfaces';

@Component({
  selector: 'istruzione-corsi-preside',
  templateUrl: './corsi-preside.component.html',
  styleUrls: ['./corsi-preside.component.scss'],
})
export class CorsiPresideComponent implements OnInit{
  panelOpenState=false;
  utente!:user;
  showadd=true;
  showremove=true;
  showupdate=true;
  showconfirm=true
  ngOnInit(){
    this.utente=JSON.parse(localStorage.getItem('utente')!)
  }
}
