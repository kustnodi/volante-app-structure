import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakMachinesRoutedRoutingModule } from './slottrak-machines-routed-routing.module';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    SlottrakMachinesRoutedRoutingModule
  ]
})
export class SlottrakMachinesRoutedModule { }
