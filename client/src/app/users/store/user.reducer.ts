import * as UserActions from './user.actions';
import { User } from '../models/user.model';

export interface State {
  user: User[];
}

const initalState: State = {
  user: [],
};

export function userReducer(
  state: State = initalState,
  action: UserActions.UserActions
) {
  switch (action.type) {
    case UserActions.LOGIN_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case UserActions.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    case UserActions.LOGIN:
      const user = new User(
        action.payload.name,
        action.payload.email,
        action.payload.token,
        action.payload.isLoggedIn
      );
      return {
        ...state,
        user,
      };
    case UserActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
