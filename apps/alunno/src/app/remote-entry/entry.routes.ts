import { Route } from '@angular/router';
import { NxWelcomeComponent } from '../nx-welcome.component';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path:'alunno/:id',component:NxWelcomeComponent}
];
