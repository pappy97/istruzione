import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartModule } from 'primeng/chart';

import { AuthService } from '@istruzione/shared/registro';
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAlunnoComponent } from './dashboard/dashboard-alunno/dashboard-alunno.component';
import { DashboardDocenteComponent } from './dashboard/dashboard-docente/dashboard-docente.component';
import { DashboardPresideComponent } from './dashboard/dashboard-preside/dashboard-preside.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DashboardAlunnoComponent,
    DashboardDocenteComponent,
    DashboardPresideComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,

    HttpClientModule,

    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    ChartModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
