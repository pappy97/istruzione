import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'istruzione-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'istituto';
  constructor(private router:Router){}
  async ngOnInit(){
    if(localStorage.getItem('user') && localStorage.getItem('user')!=='null')
      {this.router.navigate(['home'])}
    else  this.router.navigate(['login']); 
  }
}
