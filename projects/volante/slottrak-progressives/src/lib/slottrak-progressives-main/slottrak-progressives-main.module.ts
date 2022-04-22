import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakProgressivesMainRoutingModule } from './slottrak-progressives-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    SlottrakProgressivesMainRoutingModule
  ]
})
export class SlottrakProgressivesMainModule { }
