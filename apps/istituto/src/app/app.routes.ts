import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    outlet: 'docente',
    loadChildren: () =>
      import('docente/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    outlet: 'alunno',
    loadChildren: () =>
      import('alunno/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'alunno/:classe',
    outlet:'classe',
    loadChildren: () =>
      import('classe/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'alunno/:id',
    outlet: 'alunno',
    loadChildren: () =>
      import('alunno/Module').then((m) => m.RemoteEntryModule),
  },
];
