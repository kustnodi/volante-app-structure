import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'progressives',
    loadChildren: () => import('@volante/slottrak-progressives/src/lib/slottrak-progressives-main').then(m => m.SlottrakProgressivesMainModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlottrakProgressivesConfigRoutingModule { }
