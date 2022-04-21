import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs'
import { SlottrakMachinesMainRoutingModule } from './slottrak-machines-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { DetailComponent } from './components/detail/detail.component';
import { ConfigurationsComponent } from './components/detail/configurations/configurations.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EntryComponent,
    DetailComponent,
    ConfigurationsComponent
  ],
  imports: [
    SlottrakMachinesMainRoutingModule,
    MatTabsModule,
    CommonModule
  ]
})
export class SlottrakMachinesMainModule { }
