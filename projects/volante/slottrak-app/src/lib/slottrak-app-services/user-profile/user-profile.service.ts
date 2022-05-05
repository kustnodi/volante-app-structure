import { Injectable } from '@angular/core';
import { SlottrakAppServicesModule } from '../slottrak-app-services.module';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: SlottrakAppServicesModule
})
export class UserProfileService {
  private userProfile: UserProfile | undefined
  constructor() { }

  setUserProfile(userProfile: UserProfile) {
    this.userProfile = userProfile
  }

  clearUserProfile() {
    this.userProfile = undefined
  }

  getUserProfile(): UserProfile | undefined {
    return this.userProfile
  }
}
