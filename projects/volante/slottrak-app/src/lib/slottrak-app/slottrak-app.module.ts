import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SlotTrakAppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlottrakAppServicesModule } from '@volante/slottrak-app/src/lib/slottrak-app-services';

@NgModule({
  declarations: [
    MenuComponent,
    SlotTrakAppComponent
  ],
  exports: [
    SlotTrakAppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    SlottrakAppServicesModule,
    RouterModule.forChild([])
  ],
  bootstrap: [
    SlotTrakAppComponent
  ]
})
export class SlottrakAppModule { }
