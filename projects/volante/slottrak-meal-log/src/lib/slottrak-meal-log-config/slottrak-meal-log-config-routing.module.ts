import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
  ]
})
export class SlottrakMealLogConfigRoutingModule { }
