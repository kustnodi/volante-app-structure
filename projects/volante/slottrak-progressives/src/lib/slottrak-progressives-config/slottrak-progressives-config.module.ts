import { NgModule } from '@angular/core';
import { APP_MENU_ITEMS } from '@volante/slottrak-app';

import { SlottrakProgressivesConfigRoutingModule } from './slottrak-progressives-config-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SlottrakProgressivesConfigRoutingModule
  ],
  providers: [
    {
      provide: APP_MENU_ITEMS,
      multi: true,
      useValue: {
        url: '/progressives',
        displayText: 'Progressives'
      }
    }
  ]
})
export class SlottrakProgressivesConfigModule { }
