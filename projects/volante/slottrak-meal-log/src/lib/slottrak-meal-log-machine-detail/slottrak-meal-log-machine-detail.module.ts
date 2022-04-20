import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineDetailComponent } from './components/machine-detail/machine-detail.component';
import { SlottrakMealLogMachineDetailRoutingModule } from './slottrak-meal-log-machine-detail-routing.module';

@NgModule({
  declarations: [
    MachineDetailComponent
  ],
  imports: [
    SlottrakMealLogMachineDetailRoutingModule
  ]
})
export class SlottrakMealLogMachineDetailModule { }
