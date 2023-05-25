import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { NxWelcomeComponent } from '../nx-welcome.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [RemoteEntryComponent,NxWelcomeComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes),MatCardModule,MatDividerModule],
  providers: [],
})
export class RemoteEntryModule {}
