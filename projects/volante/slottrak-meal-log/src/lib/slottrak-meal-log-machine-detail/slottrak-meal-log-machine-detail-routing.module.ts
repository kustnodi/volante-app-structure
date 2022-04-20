import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachineDetailComponent } from './components/machine-detail/machine-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MachineDetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SlottrakMealLogMachineDetailRoutingModule { }
