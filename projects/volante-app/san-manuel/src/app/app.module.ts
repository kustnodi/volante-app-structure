import { NgModule } from '@angular/core';

import { SlottrakMachinesConfigModule } from '@volante/slottrak-machines';
import { RouterModule } from '@angular/router';
import { SlottrakMealLogConfigModule } from '@volante/slottrak-meal-log';
import { SlottrakAppModule, SlotTrakAppComponent } from '@volante/slottrak-app';
import { SlottrakProgressivesConfigModule } from '@volante/slottrak-progressives';
import { SlottrakUsersConfigModule } from '@volante/slottrak-users';

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    SlottrakAppModule,
    SlottrakMachinesConfigModule,
    SlottrakMealLogConfigModule,
    SlottrakProgressivesConfigModule,
    SlottrakUsersConfigModule,
  ],
  bootstrap: [SlotTrakAppComponent],
})
export class AppModule { }
