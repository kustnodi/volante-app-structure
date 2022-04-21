import { NgModule } from '@angular/core';
import { MACHINE_DETAIL_ROUTES } from '@volante/slottrak-machines';
import { SlottrakMealLogConfigRoutingModule } from './slottrak-meal-log-config-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SlottrakMealLogConfigRoutingModule
  ],
  providers: [
    {
      provide: MACHINE_DETAIL_ROUTES,
      multi: true,
      useValue: {
        displayText: 'MEAL Log',
        route: {
          path: 'meal-log',
          loadChildren: () => import('@volante/slottrak-meal-log/src/lib/slottrak-meal-log-machine-detail').then(m => m.SlottrakMealLogMachineDetailModule)
        }
      }
    }
  ]
})
export class SlottrakMealLogConfigModule { }
