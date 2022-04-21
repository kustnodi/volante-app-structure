import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakAppConfigModule, SlottrakAppConfigService } from '@volante/slottrak-app';
import { SlottrakMachinesConfigRoutingModule } from './slottrak-machines-config-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlottrakAppConfigModule,
    SlottrakMachinesConfigRoutingModule
  ]
})
export class SlottrakMachinesConfigModule {
  constructor(appConfig: SlottrakAppConfigService) { }
}
