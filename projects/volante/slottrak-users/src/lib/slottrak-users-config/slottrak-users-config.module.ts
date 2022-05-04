import { NgModule } from '@angular/core';
import { APP_MENU_ITEMS } from '@volante/slottrak-app';

import { SlottrakUsersConfigRoutingModule } from './slottrak-users-config-routing.module';

@NgModule({
  declarations: [],
  imports: [SlottrakUsersConfigRoutingModule],
  providers: [
    {
      provide: APP_MENU_ITEMS,
      multi: true,
      useValue: {
        url: '/users',
        displayText: 'Users',
      },
    },
  ],
})
export class SlottrakUsersConfigModule {}
