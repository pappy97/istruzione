import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'istruzione-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  async ngOnInit(){
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
