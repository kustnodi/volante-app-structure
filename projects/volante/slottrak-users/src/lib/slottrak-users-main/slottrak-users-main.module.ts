import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakUsersMainRoutingModule } from './slottrak-users-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { AuthGuardService } from '@volante/slottrak-app';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, SlottrakUsersMainRoutingModule],
  providers: [AuthGuardService],
})
export class SlottrakUsersMainModule {}
