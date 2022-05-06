import { Route } from "@angular/router";

export interface DetailRouteConfig {
  displayText: string;
  route: Route;
  requiresPermission: string | undefined;
}
