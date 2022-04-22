import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@volante/slottrak-app/src/lib/slottrak-app-config';
import { APP_MENU_ITEMS } from '@volante/slottrak-app/src/lib/slottrak-app-services';
import { MenuService } from './menu.service';

@Component({
  selector: 'slottrak-app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    {
      provide: MenuService,
      useFactory: (menuItems: MenuItem[]) => new MenuService(menuItems),
      deps: [APP_MENU_ITEMS]
    }
  ]
})
export class MenuComponent implements OnInit {
  get menuItems(): MenuItem[] {
    return this.menuService.menuItems
  }

  constructor(private readonly menuService: MenuService) {
  }

  ngOnInit(): void {
  }

}
