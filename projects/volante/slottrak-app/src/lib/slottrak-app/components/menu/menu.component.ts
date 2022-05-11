import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@volante/slottrak-app/src/lib/slottrak-app-config';
import {
  APP_MENU_ITEMS,
  UserProfileService,
  UserProfile,
} from '@volante/slottrak-app/src/lib/slottrak-app-services';
import { MenuService } from './menu.service';
@Component({
  selector: 'slottrak-app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    {
      provide: MenuService,
      useFactory: (menuItems: MenuItem[]) => new MenuService(menuItems),
      deps: [APP_MENU_ITEMS],
    },
  ],
})
export class MenuComponent implements OnInit {
  userProfile: UserProfile | undefined;

  get menuItems(): MenuItem[] {
    return this.menuService.menuItems;
  }

  constructor(
    private readonly menuService: MenuService,
    readonly userProfileService: UserProfileService
  ) {
    this.userProfile = userProfileService.getUserProfile();
    this.userProfileService.userProfile$.subscribe(
      (userProfile: UserProfile) => {
        this.userProfile = userProfile;
      }
    );
  }

  ngOnInit(): void {}
}
