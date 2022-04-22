import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MACHINE_DETAIL_ROUTES } from '@volante/slottrak-machines';

const routes: Routes = [
  {
    path: 'progressives',
    loadChildren: () => import('@volante/slottrak-progressives/src/lib/slottrak-progressives-main').then(m => m.SlottrakProgressivesMainModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: MACHINE_DETAIL_ROUTES,
      multi: true,
      useValue: {
        displayText: 'Progressives',
        route: {
          path: 'progressives',
          loadChildren: () => import('@volante/slottrak-progressives/src/lib/slottrak-progressives-machine-detail').then(m => m.SlottrakProgressivesMachineDetailModule)
        }
      }
    }
  ]
})
export class SlottrakProgressivesConfigRoutingModule { }
