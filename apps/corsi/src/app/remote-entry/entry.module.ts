import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';

import {MatDividerModule} from '@angular/material/divider';
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
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


import { CorsiAlunnoComponent } from '../corsi-alunno/corsi-alunno.component';
import { CorsiDocentiComponent } from '../corsi-docenti/corsi-docenti.component';
import { CorsiPresideComponent } from '../corsi-preside/corsi-preside.component';
import { InsertCorsoComponent } from '../corsi-preside/insert-corso/insert-corso.component';
import { UpdateCorsoComponent } from '../corsi-preside/update-corso/update-corso.component';
import { RemoveCorsoComponent } from '../corsi-preside/remove-corso/remove-corso.component';
import { InsertcorsoComponent } from '../insertcorso/insertcorso.component';
import { ConfirmCorsoComponent } from '../corsi-preside/confirm-corso/confirm-corso.component';

@NgModule({
  declarations: [
    RemoteEntryComponent,
    CorsiAlunnoComponent,
    CorsiDocentiComponent,
    InsertcorsoComponent,
    CorsiPresideComponent,
    InsertCorsoComponent,
    UpdateCorsoComponent,
    RemoveCorsoComponent,
    ConfirmCorsoComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),

    MatNativeDateModule,
    MatDividerModule,
    MatCheckboxModule,
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
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    ],
  providers: [],
})
export class RemoteEntryModule {}
