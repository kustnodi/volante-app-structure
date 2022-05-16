import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomDatepickerComponent } from './custom-datepicker.component';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomDatepickerHeaderComponent } from './custom-datepicker-header/custom-datepicker-header.component';

@NgModule({
  declarations: [CustomDatepickerComponent, CustomDatepickerHeaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDatepickerModule,
    InfiniteScrollModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  exports: [
    CommonModule,
    CustomDatepickerComponent,
    CustomDatepickerHeaderComponent,
  ],
  providers: [
    DatePipe,
    NgbModal,
    NgbActiveModal,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class SlotTrakUiCustomDatePickerModule {}
