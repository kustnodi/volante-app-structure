import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService, UserProfile } from '@volante/slottrak-app/src/lib/slottrak-app-services';
import { LoginFormModel } from './login-form-model';

@Component({
  selector: 'slottrak-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formModel: LoginFormModel = {
    username: '',
    permissions: [
      { name: 'admin', checked: false },
      { name: 'machineView', checked: false },
      { name: 'partView', checked: false },
      { name: 'progressiveView', checked: false },
      { name: 'mealLogView', checked: false }
    ]
  }

  constructor(private readonly userProfileService: UserProfileService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const formModel = this.formModel
    const userProfile: UserProfile = {
      userName: formModel.username,
      roles: formModel.permissions.filter(p => p.checked).map(p => p.name)
    }
    this.userProfileService.setUserProfile(userProfile)
    this.router.navigate([''])
  }
}
