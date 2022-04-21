import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'machines',
    loadChildren: () => import('@volante/slottrak-machines/src/lib/slottrak-machines-main').then(m => {
      return m.SlottrakMachinesMainModule
    })
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class SlottrakMachinesConfigRoutingModule { }
