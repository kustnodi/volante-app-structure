import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridlistComponent } from './gridlist.component';
import {
  NgbModule,
  NgbModal,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [GridlistComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    InfiniteScrollModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  exports: [CommonModule, GridlistComponent],
  providers: [
    DatePipe,
    NgbModal,
    NgbActiveModal,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class SlotTrakUiGridlistModule {}
