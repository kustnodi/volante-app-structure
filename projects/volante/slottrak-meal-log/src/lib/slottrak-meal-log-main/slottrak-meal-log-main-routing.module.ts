import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '@volante/slottrak-app';
import { EntryComponent } from './components/entry/entry.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlottrakMealLogMainRoutingModule {}
