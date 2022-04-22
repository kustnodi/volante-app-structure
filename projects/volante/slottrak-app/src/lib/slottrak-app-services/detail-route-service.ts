import { Route } from "@angular/router";
import { DetailRouteConfig } from "@volante/slottrak-app/src/lib/slottrak-app-config";

export class SlotTrakAppDetailRouteService {
  readonly detailRoutes: DetailRouteConfig[] = []

  constructor(private readonly baseRoute: Route) {
  }

  configureRoutes(detailRoutes: DetailRouteConfig[]) {
    const children = this.baseRoute.children ??= []
    children.push(...detailRoutes.map(r => r.route))
    this.detailRoutes.splice(0, this.detailRoutes.length, ...detailRoutes)
  }
}
