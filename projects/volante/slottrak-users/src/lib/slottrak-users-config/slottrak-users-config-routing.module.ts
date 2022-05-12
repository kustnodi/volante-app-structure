import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('@volante/slottrak-users/src/lib/slottrak-users-main').then(
        (m) => m.SlottrakUsersMainModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SlottrakUsersConfigRoutingModule {}
