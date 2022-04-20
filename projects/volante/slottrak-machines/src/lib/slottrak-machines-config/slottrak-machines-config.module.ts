import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakAppConfigModule, SlottrakAppConfigService } from '@volante/slottrak-app';
import { SlottrakMachinesConfigService } from './slottrak-machines-config.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlottrakAppConfigModule
  ],
  providers: [
    {
      provide: SlottrakMachinesConfigService,
      useClass: SlottrakMachinesConfigService
    }
  ]
})
export class SlottrakMachinesConfigModule {
  constructor(appConfig: SlottrakAppConfigService, slottrakMachineConfigService: SlottrakMachinesConfigService) {

    appConfig.addRootRoute({
      path: 'machines',
      loadChildren: () => import('@volante/slottrak-machines/src/lib/slottrak-machines-main').then(m => {
        m.SlottrakMachinesMainRoutingModule.addMachineDetailRoutes(slottrakMachineConfigService.machineDetailRoutes)
        return m.SlottrakMachinesMainModule
      })
    })
  }
}
