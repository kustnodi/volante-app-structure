import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import moment from 'moment';

import { FormControl } from '@angular/forms';
import { CustomDatepickerHeaderComponent } from './custom-datepicker-header/custom-datepicker-header.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'volante-slottrak-ui-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class CustomDatepickerComponent {
  @ViewChild('input') input: ElementRef;
  @ViewChild('picker') picker: MatDatepicker<Date>;

  @Input()
  public control: FormControl;

  @Input()
  public model: any;

  @Input()
  public ngClass: string;

  @Input()
  public placeholder: string;

  @Output() public modelOutput = new EventEmitter<string>();

  customheader = CustomDatepickerHeaderComponent;

  public disabled = false;

  constructor() {
    this.control = new FormControl();
  }

  focusOnInput(event: Event) {
    this.picker.open();
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 0);
  }

  searchDate(event: Event) {}

  setISO() {
    if (this.model) {
      this.modelOutput.emit(moment(this.model).toISOString());
    }
  }

  resetDate(event: Event) {
    this.model = '';
    this.modelOutput.emit(this.model);
    event.stopPropagation();
  }
}
