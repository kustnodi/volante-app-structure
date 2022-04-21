import { InjectionToken, NgModule } from '@angular/core';
import { DetailRouteConfig } from '@volante/slottrak-app';

export const MACHINE_DETAIL_ROUTES = new InjectionToken<DetailRouteConfig[]>('MACHINE_DETAIL_ROUTES', {
  providedIn: 'root',
  factory: () => []
})

@NgModule({})
export class SlottrakMachinesServicesModule { }
