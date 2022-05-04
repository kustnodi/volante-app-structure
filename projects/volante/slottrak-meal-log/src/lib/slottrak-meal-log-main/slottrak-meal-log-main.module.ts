import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakMealLogMainRoutingModule } from './slottrak-meal-log-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { GridlistModule } from '@volante/gridlist';
@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, SlottrakMealLogMainRoutingModule, GridlistModule],
})
export class SlottrakMealLogMainModule {}
