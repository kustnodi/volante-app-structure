import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnDestroy,
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import {
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { CalendarService } from '@volante/slottrak-app/src/lib/slottrak-app-services';

@Component({
  selector: 'custom-datepicker-header',
  templateUrl: './custom-datepicker-header.component.html',
  styleUrls: ['./custom-datepicker-header.component.scss'],
  providers: [CalendarService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDatepickerHeaderComponent<D> implements OnDestroy {
  constructor(
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    public _calendarService: CalendarService<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._calendarService._destroyed))
      .subscribe(() => cdr.markForCheck());

    _calendarService._calendar = _calendar;
    _calendarService._dateAdapter = _dateAdapter;
    _calendarService._dateFormats = _dateFormats;

    this._calendarService.setStartYear();
  }

  ngOnDestroy() {
    this._calendarService._destroyed.next();
    this._calendarService._destroyed.complete();
  }
}
