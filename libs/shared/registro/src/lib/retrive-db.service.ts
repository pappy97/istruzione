import { Injectable } from '@angular/core';
import { AlunniBackService } from './alunniBack.service';
import { ClasseServiceService } from './classe-service.service';
import { CorsoService } from './corso.service';
import { DocenteService } from './docente.service';
import { RegistroService } from './registro.service';
import { LezioniService } from './lezioni.service';
import { CompitiService } from './compiti.service';
import { PagelleService } from './pagelle.service';


@Injectable({
  providedIn: 'root'
})
export class RetriveDBService {

  constructor(private a:AlunniBackService,private pag:PagelleService,private comp:CompitiService,private lez:LezioniService, private co:CorsoService,private d:DocenteService, private r:RegistroService) { }
}
