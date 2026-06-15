import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { GestioneAlunniComponent } from '../gestione-alunni/gestione-alunni.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path: 'alunni', component: GestioneAlunniComponent },
];
