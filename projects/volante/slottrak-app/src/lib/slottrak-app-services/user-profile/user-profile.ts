export class UserProfile {
  private readonly isAdmin: boolean

  constructor(private readonly userProfile: { username: string, permissions: string[] }) {
    this.userProfile.permissions = this.userProfile.permissions.map(p => p.toLowerCase())
    this.isAdmin = Boolean(userProfile.permissions.find(p => p === 'admin'))

  }

  hasPermission(permission: string | undefined): boolean {
    return permission === undefined || this.isAdmin || Boolean(this.userProfile.permissions.find(p => p === permission.toLowerCase()))
  }
}
