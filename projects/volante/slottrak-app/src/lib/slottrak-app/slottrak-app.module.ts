import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SlotTrakAppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlottrakAppRoutingModule } from './slottrak-app-routing.module';
import {
  AuthGuardService,
  SlottrakAppServicesModule,
} from '@volante/slottrak-app/src/lib/slottrak-app-services';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MenuComponent, SlotTrakAppComponent, LoginComponent],
  exports: [SlotTrakAppComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule,
    SlottrakAppRoutingModule,
    SlottrakAppServicesModule,
    NgbModule,
  ],

  bootstrap: [SlotTrakAppComponent],
})
export class SlottrakAppModule {}
