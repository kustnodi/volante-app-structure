export class LoginFormModel {
  constructor(public username: string, public permissions: { name: string, checked: boolean }[]) {
  }
}
