import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { InsertcorsoComponent } from '../insertcorso/insertcorso.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path: 'insertCorso',component:InsertcorsoComponent}
];
