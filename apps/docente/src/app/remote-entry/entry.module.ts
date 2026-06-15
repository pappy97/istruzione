import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { DocentiComponent } from '../docenti/docenti.component';
import { InserimentoDocenteComponent } from '../docenti/inserimento-docente/inserimento-docente.component';
import { ModificaDocenteComponent } from '../docenti/modifica-docente/modifica-docente.component';
import { RimuoviDocenteComponent } from '../docenti/rimuovi-docente/rimuovi-docente.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    DocentiComponent,
    InserimentoDocenteComponent,
    ModificaDocenteComponent,
    RimuoviDocenteComponent,

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
    MatProgressSpinnerModule
    


  ],
  providers: [],
})
export class RemoteEntryModule {}
