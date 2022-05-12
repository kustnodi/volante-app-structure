import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakProgressivesMainRoutingModule } from './slottrak-progressives-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { AuthGuardService } from '@volante/slottrak-app';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, SlottrakProgressivesMainRoutingModule],
  providers: [AuthGuardService],
})
export class SlottrakProgressivesMainModule {}
