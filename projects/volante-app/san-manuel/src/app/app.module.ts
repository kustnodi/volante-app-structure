import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlottrakMachinesConfigModule } from '@volante/slottrak-machines';
import { SlottrakAppConfigModule, SlottrakAppConfigService } from '@volante/slottrak-app';
import { Router, RouterModule } from '@angular/router';
import { SlottrakMealLogConfigModule } from '@volante/slottrak-meal-log';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    SlottrakMachinesConfigModule,
    SlottrakAppConfigModule,
    SlottrakMealLogConfigModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, slottrakAppConfigService: SlottrakAppConfigService) {
    router.resetConfig(slottrakAppConfigService.rootRoutes)
  }
}
