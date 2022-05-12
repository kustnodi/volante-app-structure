import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SlottrakMachinesMainRoutingModule } from './slottrak-machines-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { DetailComponent } from './components/detail/detail.component';
import { ConfigurationsComponent } from './components/detail/configurations/configurations.component';
import { CommonModule } from '@angular/common';

import { SlotTrakUiGridlistModule } from '@volante/slottrak-ui';
import { MachineAddComponent } from './components/entry/buttons/add/machine-add.component';
import { AuthGuardService } from '@volante/slottrak-app';
import { MachinesAddComponent } from './components/machines-add/machines-add.component';
@NgModule({
  declarations: [
    EntryComponent,
    DetailComponent,
    ConfigurationsComponent,
    MachinesAddComponent,
    MachineAddComponent,
  ],
  imports: [
    SlottrakMachinesMainRoutingModule,
    MatTabsModule,
    CommonModule,
    SlotTrakUiGridlistModule,
  ],
  providers: [AuthGuardService],
})
export class SlottrakMachinesMainModule {}
