import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@nx/angular/mf';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
        path: 'homepage',
        component: DashboardComponent,
      },
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
        path: 'classi',
        loadChildren: () =>
          loadRemoteModule('classi', './Module').then(
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
          loadRemoteModule('pagelle', './Module').then(
            (m) => m.RemoteEntryModule
          ),
      },
    ],
  },
];
