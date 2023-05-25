import { Component,OnInit } from '@angular/core';
import { RetriveDBService } from '@istruzione/shared/registro';
@Component({
  selector: 'istruzione-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit{
  constructor(private db:RetriveDBService){}

  async ngOnInit(){
      await this.db.retrivedb()
  }
}
