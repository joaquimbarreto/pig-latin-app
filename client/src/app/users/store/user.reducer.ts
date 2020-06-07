import * as UserActions from './user.actions';
import { User } from '../models/user.model';

export interface State {
  user: User[];
}

const initalState: State = {
  user: [
    {
      name: '',
      email: '',
      token: '',
      isLoggedIn: null,
    },
  ],
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
    default:
      return state;
  }
}
