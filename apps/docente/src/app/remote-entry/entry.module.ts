import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent,],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes),MatExpansionModule],
  providers: [],
})
export class RemoteEntryModule {}
