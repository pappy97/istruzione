import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';


import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';


import { PagellaComponent } from '../pagella/pagella.component';
import { PagellaAlunnoComponent } from '../pagella/pagella-alunno/pagella-alunno.component';
import { PagellaDocenteComponent } from '../pagella/pagella-docente/pagella-docente.component';
import { PagellaPresideComponent } from '../pagella/pagella-preside/pagella-preside.component';


import { provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'apps/istituto/src/environments/environment';
import { initializeApp } from 'firebase/app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RemoteEntryComponent,
    PagellaComponent,
    PagellaAlunnoComponent,
    PagellaDocenteComponent,
    PagellaPresideComponent,
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    CommonModule,
    RouterModule.forChild(remoteRoutes),
    FormsModule,
    ReactiveFormsModule,


    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule
  ],
  providers: [],
})
export class RemoteEntryModule {}
