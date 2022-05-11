import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@volante/slottrak-app/src/lib/slottrak-app-services';
import { Subject } from 'rxjs';

@Component({
  selector: 'slottrak-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class SlotTrakAppComponent implements OnInit {
  constructor(private readonly auth: AuthService, private router: Router) {}
  loggedIn: any;
  ngOnInit(): void {
    this.auth.getappenvironment().subscribe(
      (res: any) => {
        this.auth.getappopenapi().subscribe(
          (res: any) => {},
          (err: any) => {}
        );
      },
      (err: any) => {}
    );
  }
}
