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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';

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
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTooltipModule,
    SlotTrakUiGridlistModule,
  ],
  providers: [AuthGuardService],
})
export class SlottrakMachinesMainModule {}
