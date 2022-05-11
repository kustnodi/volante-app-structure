export class UserProfile {
  private readonly isAdmin: boolean;

  constructor(
    private readonly userProfile: {
      Username: string;
      Permissions: string[];
      FirstName: string;
      LastName: string;
      Roles: string[];
      UserAuthId: Number;
    }
  ) {
    this.userProfile.Permissions = this.userProfile.Permissions.map((p: any) =>
      p.PermissionName.toLowerCase()
    );
    this.isAdmin = Boolean(
      userProfile.Permissions.find((p: any) => p.PermissionName === 'admin')
    );
  }

  hasPermission(permission: string | undefined): boolean {
    const isAdmin =
      this.userProfile.Roles.find(
        (r: any) => r.RoleName.toLowerCase() === 'admin'
      ) !== undefined;
    return (
      isAdmin ||
      this.userProfile.Permissions.find(
        (p: any) => p === permission?.toLowerCase()
      ) !== undefined
    );
  }
}
