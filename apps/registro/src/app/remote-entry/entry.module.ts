import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { VerificaComponent } from './verifica/verifica.component';
import { VerificaStudenteComponent } from './verifica-studente/verifica-studente.component';
import { InsertVotoComponent } from '../insert-voto/insert-voto.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { LezioniComponent } from '../lezioni/lezioni.component';
import { InsertLezioneComponent } from '../insert-lezione/insert-lezione.component';
import { CompitiComponent } from '../compiti/compiti.component';
import { InsertCompitiComponent } from '../insert-compiti/insert-compiti.component';


import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    NxWelcomeComponent,
    VerificaComponent,
    VerificaStudenteComponent,
    InsertVotoComponent,
    LezioniComponent,
    InsertLezioneComponent,
    CompitiComponent,
    InsertCompitiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    FormsModule,
    ReactiveFormsModule,

    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,

  ],
  providers: [],
})
export class RemoteEntryModule {}
