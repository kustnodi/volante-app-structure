import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '@volante/slottrak-app/src/lib/slottrak-app-config';
import {
  APP_MENU_ITEMS,
  UserProfileService,
  UserProfile,
  AuthService,
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
  user: any;
  get menuItems(): MenuItem[] {
    return this.menuService.menuItems;
  }

  constructor(
    private readonly menuService: MenuService,
    readonly userProfileService: UserProfileService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userProfile = userProfileService.getUserProfile();
    this.userProfileService.userProfile$.subscribe(
      (userProfile: UserProfile) => {
        this.userProfile = userProfile;
      }
    );
  }

  ngOnInit(): void {
    let userDetails: any = localStorage.getItem('User');
    this.user = JSON.parse(userDetails);
    console.log(this.menuItems);
    if (this.user) {
      this.router.navigate([this.menuItems[0].url]);
    }
  }

  logout() {
    this.authService.getappenvironment().subscribe(
      (res) => {
        this.authService.getappopenapi().subscribe(
          (res) => {
            this.authService.profile().subscribe(
              (res) => {
                localStorage.clear();
                let user: any = undefined;
                this.userProfileService.setUserProfile(user);
                this.router.navigate(['login']);
                this.authService.logout().subscribe((response) => {});
              },
              (err) => {
                localStorage.clear();
                this.router.navigate(['login']);
              }
            );
          },
          (err) => {}
        );
      },
      (err) => {}
    );
  }
  sidemenu() {}
}
