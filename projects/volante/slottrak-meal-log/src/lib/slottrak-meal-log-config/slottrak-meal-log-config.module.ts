import { NgModule } from '@angular/core';
import { APP_MENU_ITEMS } from '@volante/slottrak-app';
import { SlottrakMealLogConfigRoutingModule } from './slottrak-meal-log-config-routing.module';

@NgModule({
  declarations: [],
  imports: [
    SlottrakMealLogConfigRoutingModule
  ],
  providers: [
    {
      provide: APP_MENU_ITEMS,
      multi: true,
      useValue: {
        displayText: 'MEAL Log',
        url: '/meal-log'
      }
    }
  ]
})
export class SlottrakMealLogConfigModule { }
