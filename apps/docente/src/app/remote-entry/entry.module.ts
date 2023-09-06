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
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AlunniComponent } from '../alunni/alunni.component';
import { InserimentoAlunnoComponent } from '../alunni/inserimento-alunno/inserimento-alunno.component';
import { ModificaAlunnoComponent } from '../alunni/modifica-alunno/modifica-alunno.component';
import { RimuoviAlunnoComponent } from '../alunni/rimuovi-alunno/rimuovi-alunno.component';

import { DocentiComponent } from '../docenti/docenti.component';
import { InserimentoDocenteComponent } from '../docenti/inserimento-docente/inserimento-docente.component';
import { ModificaDocenteComponent } from '../docenti/modifica-docente/modifica-docente.component';
import { RimuoviDocenteComponent } from '../docenti/rimuovi-docente/rimuovi-docente.component';
import { CorsiComponent } from '../corsi/corsi.component';
import { InserimentocorsoComponent } from '../corsi/inserimentocorso/inserimentocorso.component';
import { ModificacorsoComponent } from '../corsi/modificacorso/modificacorso.component';
import { RimuovicorsoComponent } from '../corsi/rimuovicorso/rimuovicorso.component';
import { ConfermacorsoComponent } from '../corsi/confermacorso/confermacorso.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    AlunniComponent,
    InserimentoAlunnoComponent,
    ModificaAlunnoComponent,
    RimuoviAlunnoComponent,
    DocentiComponent,
    InserimentoDocenteComponent,
    ModificaDocenteComponent,
    RimuoviDocenteComponent,
    CorsiComponent,
    InserimentocorsoComponent,
    ModificacorsoComponent,
    RimuovicorsoComponent,
    ConfermacorsoComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatExpansionModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatSnackBarModule




  ],
  providers: [],
})
export class RemoteEntryModule {}
