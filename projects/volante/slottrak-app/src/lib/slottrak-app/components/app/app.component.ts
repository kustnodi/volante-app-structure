import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthService,
  UserProfileService,
  UserProfile,
} from '@volante/slottrak-app/src/lib/slottrak-app-services';
import { Subject } from 'rxjs';

@Component({
  selector: 'slottrak-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class SlotTrakAppComponent implements OnInit {
  constructor(
    private readonly auth: AuthService,
    private router: Router,
    private readonly userProfileService: UserProfileService
  ) {}
  userProfile: UserProfile | undefined;
  loggedIn: any;
  ngOnInit(): void {
    this.auth.getappenvironment().subscribe(
      (res: any) => {
        this.auth.getappopenapi().subscribe(
          (res: any) => {
            const user: any = localStorage.getItem('User');
            const userData = JSON.parse(user);
            if (!user) {
              this.loggedIn = false;
              this.router.navigate(['login']);
            } else {
              this.loggedIn = true;
              const userProfile: UserProfile = new UserProfile(userData);
              this.userProfileService.setUserProfile(userProfile);
            }
            this.userProfileService.userProfile$.subscribe((res: any) => {
              if (res) {
                this.loggedIn = true;
              }
            });
          },
          (err: any) => {}
        );
      },
      (err: any) => {}
    );
  }
}
