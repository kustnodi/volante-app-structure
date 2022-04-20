import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakAppConfigModule, SlottrakAppConfigService } from '@volante/slottrak-app';

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
      loadChildren: () => import('@volante/slottrak-machines/src/lib/slottrak-machines-main').then(m => m.SlottrakMachinesMainModule)
    })
  }
}
