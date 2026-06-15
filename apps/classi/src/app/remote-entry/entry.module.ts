import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';  
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { DashboardComponent } from '../preside/dasboard/dashboard.component';
import { DocentiComponent } from '../preside/docenti/docenti.component';
import { StudentiComponent } from '../preside/studenti/studenti.component';
import { OrarioComponent } from '../preside/orario/orario.component';
import { StatisticheComponent } from '../preside/statistiche/statistiche.component';
import { PresideClassiComponent } from '../preside/classi/classi.component';
import { InserimentoClasseComponent } from '../preside/inserimento-classe/inserimento-classe.component';

import { StudenteDasboardClasseComponent } from '../studenti/dasboard-classe/dasboard-classe.component';
import { StudenteDocentiComponent } from '../studenti/docenti/docenti.component';
import { StudenteInfoClasseComponent } from '../studenti/info-classe/info-classe.component';
import { StudenteStudentiClasseComponent } from '../studenti/studenti-classe/studenti-classe.component';
import { StudenteOrarioClasseComponent } from '../studenti/orario-classe/orario-classe.component';


@NgModule({
  declarations: [
    RemoteEntryComponent,
    DashboardComponent,
    DocentiComponent,
    StudentiComponent,
    OrarioComponent,
    StatisticheComponent,
    PresideClassiComponent,
    InserimentoClasseComponent,
    StudenteDasboardClasseComponent,
    StudenteDocentiComponent,
    StudenteInfoClasseComponent,
    StudenteStudentiClasseComponent,
    StudenteOrarioClasseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
