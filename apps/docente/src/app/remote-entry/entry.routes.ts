import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { DocentiComponent } from '../docenti/docenti.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path: 'docenti', component:DocentiComponent}
];
