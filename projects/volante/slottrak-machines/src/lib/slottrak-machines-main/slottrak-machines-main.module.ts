import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SlottrakMachinesMainRoutingModule } from './slottrak-machines-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { DetailComponent } from './components/detail/detail.component';
import { ConfigurationsComponent } from './components/detail/configurations/configurations.component';
import { CommonModule } from '@angular/common';
import { MachinesAddComponent } from './components/machines-add/machines-add.component';
import { MachineAddModule } from '@volante/machine-add';
import { GridlistModule } from '@volante/gridlist';
@NgModule({
  declarations: [
    EntryComponent,
    DetailComponent,
    ConfigurationsComponent,
    MachinesAddComponent,
  ],
  imports: [
    SlottrakMachinesMainRoutingModule,
    MatTabsModule,
    CommonModule,
    MachineAddModule,
    GridlistModule,
  ],
})
export class SlottrakMachinesMainModule { }
