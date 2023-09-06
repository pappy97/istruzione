import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { AppComponent } from './app.component';
import { CompitiComponent } from './compiti/compiti.component';
import { ClassComponent } from './class/class.component';
import { OrarioComponent } from './orario/orario.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'docente',
        loadChildren: () =>
          loadRemoteModule('docente', './Module').then(
            (m) => m.RemoteEntryModule
          ),
      },

      {
        path: 'alunno',
        loadChildren: () =>
          loadRemoteModule('alunno', './Module').then(
            (m) => m.RemoteEntryModule
          ),
      },
      {
        path: 'registro',
        loadChildren: () =>
          loadRemoteModule('registro', './Module').then(
            (m) => m.RemoteEntryModule
          ),
      },
      {
        path: 'corsi',
        loadChildren: () =>
          loadRemoteModule('corsi', './Module').then(
            (m) => m.RemoteEntryModule
          ),
      },
      {
        path: 'pagelle',
        loadChildren: () =>
          loadRemoteModule('pagelle', './Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'compiti',
        component: CompitiComponent,
      },

      {
        path: 'classi',
        component: ClassComponent,
      },
      {
        path: 'orario',
        component: OrarioComponent,
      },
    ],
  },
];
