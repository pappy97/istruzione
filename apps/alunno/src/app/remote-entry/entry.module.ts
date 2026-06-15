import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSortModule } from "@angular/material/sort";

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { GestioneAlunniComponent } from '../gestione-alunni/gestione-alunni.component';
import { InserimentoAlunnoComponent } from '../inserimento-alunno/inserimento-alunno.component';
import { ModificaAlunnoComponent } from '../modifica-alunno/modifica-alunno.component';
@NgModule({
  declarations: [
    RemoteEntryComponent,
    GestioneAlunniComponent,
    InserimentoAlunnoComponent,
    ModificaAlunnoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule
],
  providers: [],
})
export class RemoteEntryModule {

}
