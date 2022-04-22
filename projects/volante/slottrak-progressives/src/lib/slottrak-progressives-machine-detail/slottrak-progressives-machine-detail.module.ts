import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakProgressivesMachineDetailRoutingModule } from './slottrak-progressives-machine-detail-routing.module';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    SlottrakProgressivesMachineDetailRoutingModule
  ]
})
export class SlottrakProgressivesMachineDetailModule { }
