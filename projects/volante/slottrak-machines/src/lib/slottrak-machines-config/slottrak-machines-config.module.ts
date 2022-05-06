import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakMachinesConfigRoutingModule } from './slottrak-machines-config-routing.module';
import { APP_MENU_ITEMS } from '@volante/slottrak-app';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlottrakMachinesConfigRoutingModule
  ],
  providers: [
    {
      provide: APP_MENU_ITEMS,
      multi: true,
      useValue: {
        displayText: 'Machines',
        url: '/machines',
        requiresPermission: 'machineView'
      }
    }
  ]
})
export class SlottrakMachinesConfigModule { }
