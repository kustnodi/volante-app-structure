import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SlottrakAppServicesModule } from '../slottrak-app-services.module';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: SlottrakAppServicesModule
})
export class UserProfileService {
  private userProfile: UserProfile | undefined
  public userProfile$: Subject<UserProfile> = new Subject<UserProfile>()

  constructor() { }

  setUserProfile(userProfile: UserProfile) {
    this.userProfile = userProfile
    this.userProfile$.next(userProfile)
  }

  clearUserProfile() {
    this.userProfile = undefined
  }

  getUserProfile(): UserProfile | undefined {
    return this.userProfile
  }
}
