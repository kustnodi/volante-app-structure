import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlottrakMealLogMainRoutingModule } from './slottrak-meal-log-main-routing.module';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    CommonModule,
    SlottrakMealLogMainRoutingModule
  ]
})
export class SlottrakMealLogMainModule { }
