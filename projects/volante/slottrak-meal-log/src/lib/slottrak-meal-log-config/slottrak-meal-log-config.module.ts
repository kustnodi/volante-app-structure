import { NgModule } from '@angular/core';
import { SlottrakMachinesConfigModule, SlottrakMachinesConfigService } from '@volante/slottrak-machines';

@NgModule({
  declarations: [],
  imports: [
    SlottrakMachinesConfigModule
  ]
})
export class SlottrakMealLogConfigModule {
  constructor(slottrakMachinesConfigService: SlottrakMachinesConfigService) {
    slottrakMachinesConfigService.machineDetailRoutes.push({
      path: 'meal-log',
      loadChildren: () => import('@volante/slottrak-meal-log/src/lib/slottrak-meal-log-machine-detail').then(m => m.SlottrakMealLogMachineDetailModule)
    })
  }
}
