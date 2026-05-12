import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner"

import { AuthService } from '@istruzione/shared/registro';
import { environment } from '../environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { DataService } from '@istruzione/shared/registro';

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
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompitiComponent } from './compiti/compiti.component';
import { ClassComponent } from './class/class.component';
import { OrarioComponent } from './orario/orario.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CompitiComponent,
    ClassComponent,
    OrarioComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule ,

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
  ],
  providers: [AuthService,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
