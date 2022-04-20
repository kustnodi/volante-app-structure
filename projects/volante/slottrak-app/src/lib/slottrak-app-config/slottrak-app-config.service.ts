import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { SlottrakAppConfigModule } from './slottrak-app-config.module';

@Injectable({
  providedIn: SlottrakAppConfigModule
})
export class SlottrakAppConfigService {
  readonly rootRoutes: Routes = []
  constructor() { }

  addRootRoute(route: Route) {
    const routes = this.rootRoutes
    routes.splice(routes.length - 1, 0, route)
  }
}
