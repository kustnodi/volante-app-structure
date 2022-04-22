import { NgModule } from '@angular/core';
import { SlotTrakAppComponent, SlottrakAppModule } from '@volante/slottrak-app';
import { RouterModule } from '@angular/router';
import { SlottrakMachinesConfigModule } from '@volante/slottrak-machines';
import { SlottrakMealLogConfigModule } from '@volante/slottrak-meal-log';
import { SlottrakProgressivesConfigModule } from '@volante/slottrak-progressives';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    SlottrakAppModule,
    SlottrakMachinesConfigModule,
    SlottrakProgressivesConfigModule
  ],
  providers: [],
  bootstrap: [SlotTrakAppComponent]
})
export class AppModule { }
