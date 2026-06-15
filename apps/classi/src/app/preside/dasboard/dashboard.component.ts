import { Component, Input } from '@angular/core';

@Component({
  selector: 'istruzione-dashboard-classe',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @Input() classe: any;
}
