import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RetriveDBService } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'istituto';
  constructor(private router:Router, private db:RetriveDBService){}
  async ngOnInit(){
    this.db.retrivedb()
    if(localStorage.getItem('user')===undefined) this.router.navigate(['login']);
    else this.router.navigate(['home'])
  }

}
