import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakUsersMainRoutingModule } from './slottrak-users-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, SlottrakUsersMainRoutingModule],
})
export class SlottrakUsersMainModule {}
