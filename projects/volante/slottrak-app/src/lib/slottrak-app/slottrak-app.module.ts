import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    MenuComponent,
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild([])
  ]
})
export class SlottrakAppModule { }
