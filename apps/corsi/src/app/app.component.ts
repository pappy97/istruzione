import { Component, OnInit } from '@angular/core';
import { RetriveDBService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private db:RetriveDBService){}
  async ngOnInit(){
      await this.db.retrivedb()
      localStorage.setItem('utente',JSON.stringify(
        {
          "classe": [
            ""
          ],
          "cognome": "Rossi",
          "email": "ferossi@email.com",
          "id": "P0001",
          "nome": "Federico",
          "type": 0
        }
      )
      )
  }
}
