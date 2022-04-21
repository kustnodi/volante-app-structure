import { Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailRouteConfig } from '@volante/slottrak-app';
import { MACHINE_DETAIL_ROUTES } from '@volante/slottrak-machines/src/lib/slottrak-machines-services';
import { ConfigurationsComponent } from './components/detail/configurations/configurations.component';
import { DetailComponent } from './components/detail/detail.component';
import { EntryComponent } from './components/entry/entry.component';

const machineDetailChildren: Routes = []

const routes: Routes = [
  {
    path: '',
    component: EntryComponent
  },
  {
    path: ':id',
    component: DetailComponent,
    children: machineDetailChildren
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SlottrakMachinesMainRoutingModule {
  constructor(@Inject(MACHINE_DETAIL_ROUTES) machineDetailRoutes: DetailRouteConfig[]) {
    const defaultRoutes = this.getDefaultRoutes()
    machineDetailRoutes.splice(0, 0, ...defaultRoutes)
    const detailRoutes = machineDetailRoutes.map(d => d.route)
    machineDetailChildren.push(...detailRoutes)
  }

  private getDefaultRoutes(): DetailRouteConfig[] {
    return [
      {
        displayText: 'Configurations',
        route: {
          path: '',
          component: ConfigurationsComponent
        }
      }
    ]
  }
}
