import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  UserProfileService,
  UserProfile,
  AuthService,
} from '@volante/slottrak-app/src/lib/slottrak-app-services';

import { LoginFormModel } from './login-form-model';

@Component({
  selector: 'slottrak-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // public formModel: LoginFormModel = {
  //   username: '',
  //   permissions: [
  //     { name: 'admin', checked: false },
  //     { name: 'machineView', checked: false },
  //     { name: 'partView', checked: false },
  //     { name: 'progressiveView', checked: false },
  //     { name: 'mealLogView', checked: false },
  //     { name: 'userView', checked: false },
  //   ],
  // };
  loginForm!: FormGroup;
  submitted = false;
  loggedIn: any;
  errorMsg: any;
  tabs: any;
  constructor(
    private readonly userProfileService: UserProfileService,
    private readonly router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', [Validators.required]],
    });
    this.userProfileService.userProfile$.subscribe((res: any) => {
      if (res) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  onSubmit(): void {
    // const formModel = this.formModel;
    // const userProfile: UserProfile = new UserProfile({
    //   username: formModel.username,
    //   permissions: formModel.permissions
    //     .filter((p) => p.checked)
    //     .map((p) => p.name),
    // });
    // this.userProfileService.setUserProfile(userProfile);
    // this.router.navigate(['']);
    this.submitted = true;
    let data = {
      Username: this.loginForm.value.Username,
      Password: this.loginForm.value.Password,
      RememberMe: false,
    };
    if (this.loginForm.valid) {
      this.auth.login(data).subscribe(
        (response: any) => {
          this.auth.profile().subscribe(
            (res: any) => {
              // this.auth.isLoggedIn.next({ status: '1' });
              localStorage.setItem('User', JSON.stringify(res));
              localStorage.setItem(
                'SessionId',
                JSON.stringify(response.SessionId)
              );
              const userProfile: UserProfile = new UserProfile(res);
              this.userProfileService.setUserProfile(userProfile);

              // this.router.navigate(['']);
            },
            (err: any) => {
              console.log(err);
            }
          );
        },
        (err: any) => {
          console.log(err);
          this.errorMsg = err.error.ResponseStatus.Message;
        }
      );
    }
  }
}
