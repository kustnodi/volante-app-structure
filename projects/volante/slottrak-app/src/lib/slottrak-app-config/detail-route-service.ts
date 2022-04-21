import { DetailRouteConfig } from "./detail-route-config";

export class DetailRouteService {
  readonly detailRoutes: DetailRouteConfig[] = []

  add(detailRouteConfig: DetailRouteConfig) {
    this.detailRoutes.push(detailRouteConfig)
  }
}


