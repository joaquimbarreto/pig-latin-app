import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: User) {}
}
export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;
}

export type UserActions = LoginUser | LogoutUser;
