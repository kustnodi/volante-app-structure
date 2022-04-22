import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MACHINE_DETAIL_ROUTES } from '@volante/slottrak-machines';

const routes: Routes = [
  {
    path: 'meal-log',
    loadChildren: () => import('@volante/slottrak-meal-log/src/lib/slottrak-meal-log-main').then(m => m.SlottrakMealLogMainModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
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
export class SlottrakMealLogConfigRoutingModule { }
