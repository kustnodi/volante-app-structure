import { inject, Inject, NgModule, Optional } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { EntryComponent } from './components/entry/entry.component';
import { ConfigurationsComponent } from './components/detail/configurations/configurations.component';

import {
  MACHINE_DETAIL_ROUTES,
  MACHINE_DETAIL_ROUTE_SERVICE,
} from '@volante/slottrak-machines/src/lib/slottrak-machines-services';
import {
  DetailRouteConfig,
  SlotTrakAppDetailRouteService,
  UserProfileService,
} from '@volante/slottrak-app';
import { MachinesAddComponent } from './components/machines-add/machines-add.component';

const detailRoute: Route = {
  path: ':id',
  component: DetailComponent,
  children: [],
};

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
  },
  {
    path: 'add',
    component: MachinesAddComponent,
  },
  detailRoute,
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: MACHINE_DETAIL_ROUTE_SERVICE,
      useFactory: () => new SlotTrakAppDetailRouteService(detailRoute, inject(UserProfileService)),
    },
  ],
})
export class SlottrakMachinesMainRoutingModule {
  constructor(
    @Inject(MACHINE_DETAIL_ROUTE_SERVICE)
    machineDetailRouteService: SlotTrakAppDetailRouteService,
    @Optional()
    @Inject(MACHINE_DETAIL_ROUTES)
    machineDetailRoutes: DetailRouteConfig[] | undefined
  ) {
    machineDetailRoutes ??= [];
    //configure the routes as soon as module is loaded so router sees all routes
    machineDetailRouteService.configureRoutes([
      {
        displayText: 'Configurations',
        route: {
          path: '',
          component: ConfigurationsComponent,
        },
        requiresPermission: 'machineView',
      },
      ...machineDetailRoutes,
    ]);
  }
}
