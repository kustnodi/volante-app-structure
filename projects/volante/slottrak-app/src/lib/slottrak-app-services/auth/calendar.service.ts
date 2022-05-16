import { Injectable } from '@angular/core';
import {
  NgxMatCalendar,
  NgxMatDateAdapter,
  NgxMatDateFormats,
} from '@angular-material-components/datetime-picker';
import { MatCalendar } from '@angular/material/datepicker';
import { DateAdapter, MatDateFormats } from '@angular/material/core';
import { Subject } from 'rxjs';

@Injectable()
export class CalendarService<D> {
  _calendar: NgxMatCalendar<D> | MatCalendar<D>;
  _dateAdapter: NgxMatDateAdapter<D> | DateAdapter<D>;
  _dateFormats: NgxMatDateFormats | MatDateFormats;

  _destroyed = new Subject<void>();
  todayDate: D;
  readonly YEARS_PER_VIEW = 24;
  START_YEAR_IN_VIEW = 2016;
  NEXT_YEAR_IN_VIEW = this.START_YEAR_IN_VIEW + this.YEARS_PER_VIEW;

  get periodLabel() {
    return this._dateAdapter.format(
      this._calendar.activeDate,
      this._dateFormats.display.monthYearLabel
    );
  }

  previousClicked() {
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(
      this._calendar.activeDate,
      -1
    );

    if (this._calendar.currentView == 'multi-year') {
      this.START_YEAR_IN_VIEW -= this.YEARS_PER_VIEW;
      this.todayDate = this._dateAdapter.createDate(
        this.START_YEAR_IN_VIEW,
        1,
        1
      );
      this._calendar._goToDateInView(this.todayDate, 'multi-year');
    }
  }

  nextClicked() {
    this._calendar.activeDate = this._dateAdapter.addCalendarMonths(
      this._calendar.activeDate,
      1
    );

    if (this._calendar.currentView == 'multi-year') {
      this.START_YEAR_IN_VIEW += this.YEARS_PER_VIEW;
      this.todayDate = this._dateAdapter.createDate(
        this.START_YEAR_IN_VIEW,
        1,
        1
      );
      this._calendar._goToDateInView(this.todayDate, 'multi-year');
    }
  }

  openCalendar() {
    switch (this._calendar.currentView) {
      case 'month':
        this._calendar._goToDateInView(this._calendar.activeDate, 'year');
        break;
      case 'year':
        this._calendar._goToDateInView(this._calendar.activeDate, 'multi-year');
        break;
    }
  }

  setStartYear() {
    this.todayDate = this._dateAdapter.today();
    let todayYear = this._dateAdapter.getYear(this.todayDate);

    if (todayYear < this.START_YEAR_IN_VIEW) {
      while (todayYear < this.START_YEAR_IN_VIEW) {
        this.START_YEAR_IN_VIEW -= this.YEARS_PER_VIEW;
      }
    } else if (todayYear > this.NEXT_YEAR_IN_VIEW) {
      while (todayYear >= this.NEXT_YEAR_IN_VIEW + this.YEARS_PER_VIEW) {
        this.NEXT_YEAR_IN_VIEW += this.YEARS_PER_VIEW;
      }
      this.START_YEAR_IN_VIEW = this.NEXT_YEAR_IN_VIEW;
    }
  }
}
