import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakAppConfigModule, SlottrakAppConfigService, DetailRouteConfig } from '@volante/slottrak-app';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SlottrakAppConfigModule
  ]
})
export class SlottrakMachinesConfigModule {
  constructor(appConfig: SlottrakAppConfigService) {

    appConfig.addRootRoute({
      path: 'machines',
      loadChildren: () => import('@volante/slottrak-machines/src/lib/slottrak-machines-main').then(m => {
        return m.SlottrakMachinesMainModule
      })
    })
  }
}
