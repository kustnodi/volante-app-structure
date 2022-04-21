import { InjectionToken, NgModule } from '@angular/core';
import { DetailRouteConfig, SlotTrakAppDetailRouteService } from '@volante/slottrak-app';

export const MACHINE_DETAIL_ROUTES = new InjectionToken<DetailRouteConfig[]>('MACHINE_DETAIL_ROUTES')
export const MACHINE_DETAIL_ROUTE_SERVICE = new InjectionToken<SlotTrakAppDetailRouteService>('MACHINE_DETAIL_ROUTE_SERVICE')

@NgModule({})
export class SlottrakMachinesServicesModule { }
