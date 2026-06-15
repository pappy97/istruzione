/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnInit } from '@angular/core';
import { user } from '@istruzione/shared/registro';

@Component({
  selector: 'istruzione-istituto-dashboard-alunno',
  templateUrl: './dashboard-alunno.component.html',
  styleUrl: './dashboard-alunno.component.scss',
})
export class DashboardAlunnoComponent  implements OnInit{
  @Input() user!: user;

  nome = 'Mario Rossi';
  classe = '4A Informatica';

  media = 8.2;
  assenze = 5;
  corsi = 3;

  displayedColumns = [
    'materia',
    'voto',
    'data'
  ];

  ultimiVoti = [
    {
      materia: 'Matematica',
      voto: 8,
      data: '12/06/2026'
    },
    {
      materia: 'Italiano',
      voto: 7,
      data: '10/06/2026'
    },
    {
      materia: 'Informatica',
      voto: 9,
      data: '08/06/2026'
    }
  ];

  comunicazioni = [
    'Pubblicati i voti di Matematica',
    'Corso di Robotica disponibile',
    'Riunione genitori il 20/06'
  ];

  chartData: any;
  chartOptions: any;

  ngOnInit() {

    this.chartData = {
      labels: ['Set', 'Ott', 'Nov', 'Dic', 'Gen', 'Feb'],
      datasets: [
        {
          label: 'Media Voti',
          data: [7, 7.3, 7.5, 7.8, 8, 8.2]
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };

  }
}
