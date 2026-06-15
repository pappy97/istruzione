/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunniBackService, ClasseService, ComunicazioneService, CorsoService, DocenteService, user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-istituto-dashboard-preside',
  templateUrl: './dashboard-preside.component.html',
  styleUrl: './dashboard-preside.component.scss',
})
export class DashboardPresideComponent implements OnInit {
  type!: number;
  @Input() user!: user;
  selectedAlunno = 0;
  data: any;
  numAlunni = 0;
  numDocenti = 0;
  numCorsi = 0;
  numClassi = 0;
  options: any;
  constructor(
    private router: Router,
    private alunniService: AlunniBackService,
    private comService: ComunicazioneService,
    private docentiService: DocenteService,
    private classiService: ClasseService,
    private corsiService: CorsoService
  ) {}
  async ngOnInit(): Promise<void> {
    this.alunniService.getAlunni().subscribe((data) => {
      this.numAlunni = data.length;
      const anniMap = data
        .filter((user) => user.classe)
        .map((a) => a.classe![0])
        .reduce((acc, studente) => {
          acc[studente] = (acc[studente] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
      const labels = Object.keys(anniMap).map((anno) => `Anno ${anno}`);
      const values = Object.values(anniMap);
      this.data = {
        labels,
        datasets: [
          {
            label: 'Numero studenti',
            data: values,
          },
        ],
      };
      const classiMap = data
        .filter((user) => user.classe !== undefined)
        .reduce((acc, studente) => {
          acc[studente.classe!] = (acc[studente.classe!] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
      console.log('classiMap', Object.keys(classiMap));
      this.numClassi = Object.keys(classiMap).length;
    });
    this.docentiService.getDocenti().subscribe((data) => {
      this.numDocenti = data.length;
    });
    this.classiService.getClassi().subscribe((data) => {
      this.numClassi = data.length;
    });
    this.corsiService.getCorsi().subscribe((data) => {
      this.numCorsi = data.length;
    });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };
    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }
  goTo(type: number) {
    switch (type) {
      case 1:
        this.comService.sendData(6);
        break;
      case 2:
        this.comService.sendData(7);
        break;
    }
  }
}
