import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SlottrakMachinesConfigModule } from '@volante/slottrak-machines';
import { RouterModule } from '@angular/router';
import { SlottrakMealLogConfigModule } from '@volante/slottrak-meal-log';
import { SlottrakAppModule } from '@volante/slottrak-app';
import { SlottrakProgressivesConfigModule } from '@volante/slottrak-progressives';
import { SlotTrakAppComponent } from 'projects/volante/slottrak-app/src/lib/slottrak-app';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    SlottrakAppModule,
    SlottrakMachinesConfigModule,
    SlottrakMealLogConfigModule,
    SlottrakProgressivesConfigModule
  ],
  bootstrap: [SlotTrakAppComponent]
})
export class AppModule {
}
