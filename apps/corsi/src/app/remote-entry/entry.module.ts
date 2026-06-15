import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { DashboardCorsiPresideComponent } from '../preside/dasboard/dashboard.component';


@NgModule({
  declarations: [
    RemoteEntryComponent,
    DashboardCorsiPresideComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [],
})
export class RemoteEntryModule {}
