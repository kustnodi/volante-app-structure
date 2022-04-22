import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { SlottrakMachinesConfigModule } from '@volante/slottrak-machines';
import { SlottrakAppModule, SlotTrakAppComponent } from '@volante/slottrak-app';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SlottrakMachinesConfigModule,
    SlottrakAppModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [SlotTrakAppComponent]
})
export class AppModule { }
