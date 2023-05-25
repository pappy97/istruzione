import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { InsertVotoComponent } from '../insert-voto/insert-voto.component';
import { InsertLezioneComponent } from '../insert-lezione/insert-lezione.component';
import { InsertCompitiComponent } from '../insert-compiti/insert-compiti.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path:'insertVoto',component:InsertVotoComponent},
  { path:'insertLezione',component:InsertLezioneComponent},
  { path:'insertcompito',component:InsertCompitiComponent}
];
