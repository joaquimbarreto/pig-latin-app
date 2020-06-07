import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './users/store/user.reducer';

export interface AppState {
  user: fromUser.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  user: fromUser.userReducer,
};
