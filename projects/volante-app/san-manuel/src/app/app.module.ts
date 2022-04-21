import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlottrakMachinesConfigModule } from '@volante/slottrak-machines';
import { RouterModule } from '@angular/router';
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
    SlottrakMealLogConfigModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
