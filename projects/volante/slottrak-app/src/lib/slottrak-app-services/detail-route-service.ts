import { Route } from '@angular/router';
import { DetailRouteConfig } from '@volante/slottrak-app/src/lib/slottrak-app-config';
import { Observable, Subject, Subscription } from 'rxjs';
import { UserProfileService, UserProfile } from './user-profile';

export class SlotTrakAppDetailRouteService {
  detailRoutes: DetailRouteConfig[] = [];
  private userProfile: UserProfile | undefined;
  private detailRoutesRaw: DetailRouteConfig[] = [];

  constructor(
    private readonly baseRoute: Route,
    userProfileService: UserProfileService
  ) {
    this.userProfile = userProfileService.getUserProfile();
    console.log(this.userProfile, 'userprofiles');

    userProfileService.userProfile$.subscribe((userProfile) => {
      this.userProfile = userProfile;
      this.setUserRoutes();
    });
  }

  private setUserRoutes() {
    console.log(this.detailRoutesRaw, 'detailRoute');
    this.detailRoutes = this.detailRoutesRaw.filter((ur) =>
      this.userProfile?.hasPermission(ur.requiresPermission)
    );
    console.log(this.detailRoutes, 'detailRoutessssss');
  }

  configureRoutes(detailRoutes: DetailRouteConfig[]) {
    this.detailRoutesRaw = detailRoutes;
    console.log(this.detailRoutesRaw, 'configureroutes');
    const children = this.baseRoute.children ?? [];
    const allRoutes = this.detailRoutesRaw.map((r) => r.route);
    children.splice(0, children.length, ...allRoutes);
  }
}
