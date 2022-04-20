import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { ConfigurationsComponent } from './components/detail/configurations/configurations.component';
import { DetailComponent } from './components/detail/detail.component';
import { EntryComponent } from './components/entry/entry.component';

const machineDetailChildren: Routes = [
  {
    path: '',
    component: ConfigurationsComponent
  }
]

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
    children: [
      {
        path: ':id',
        component: DetailComponent,
        children: machineDetailChildren
      }
    ]
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
  static addMachineDetailRoutes(routes: Routes) {
    machineDetailChildren.push(...routes)
  }
}
