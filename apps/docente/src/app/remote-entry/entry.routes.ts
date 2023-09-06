import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { AlunniComponent } from '../alunni/alunni.component';
import { DocentiComponent } from '../docenti/docenti.component';
import { CorsiComponent } from '../corsi/corsi.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path: 'gestionealunni', component:AlunniComponent},
  { path: 'gestionedocenti', component:DocentiComponent},
  { path: 'gestionecorsi', component:CorsiComponent}
];
