/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component,OnInit } from '@angular/core';
import { RetriveDBService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  utente!:any;
  constructor (private db:RetriveDBService){}
  ngOnInit(){
    this.db.retrivedb()
  }
}
