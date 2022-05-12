import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakMealLogMainRoutingModule } from './slottrak-meal-log-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { SlotTrakUiGridlistModule } from '@volante/slottrak-ui';
import { AuthGuardService } from '@volante/slottrak-app';
@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    SlottrakMealLogMainRoutingModule,
    SlotTrakUiGridlistModule,
  ],
  providers: [AuthGuardService],
})
export class SlottrakMealLogMainModule {}
