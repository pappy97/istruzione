import { Component, OnInit } from '@angular/core';
import { AlunniBackService, user } from '@istruzione/shared/registro';

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
    console.log("ciao")
  }
}
