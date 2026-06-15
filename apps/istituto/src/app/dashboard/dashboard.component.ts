/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, ClasseService, ComunicazioneService, CorsoService, DocenteService, user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  user!: user;
  role: any;
  constructor(
    private router: Router,
    private alunniService: AlunniBackService,
    private comService: ComunicazioneService,
    private docentiService: DocenteService,
    private classiService: ClasseService,
    private corsiService: CorsoService
  ) {}
  async ngOnInit(): Promise<void> {
    this.user = JSON.parse(localStorage.getItem('utente') ?? '{}');
    this.role = (await this.alunniService.getUserRole(this.user?.email)) ?? '';
  }
}
