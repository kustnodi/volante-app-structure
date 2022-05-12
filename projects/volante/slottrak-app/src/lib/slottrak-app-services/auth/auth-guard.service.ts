import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  loggedin: any;
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    this.auth.profile().subscribe((res) => {
      if (res.status === 401) {
        this.router.navigate(['login']);
        this.loggedin = false;
      }
      this.loggedin = true;
    });
    return this.loggedin;
  }
}
