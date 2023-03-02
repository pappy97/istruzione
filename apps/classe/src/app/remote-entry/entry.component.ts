import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'istruzione-classe-entry',
  template: `<div>CLASSE: {{classe}}</div>`,
})
export class RemoteEntryComponent {
  classe!: string | null;
  classi!: string[] | null;
  constructor(private route:ActivatedRoute){
    route.params.subscribe(paramas=>{
      this.classe= paramas['classe']
      this.classi= paramas['classi']
    })
  }

}
