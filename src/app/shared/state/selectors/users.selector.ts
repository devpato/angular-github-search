import {
  MemoizedSelector,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import { State } from '../state';
import { User } from '../../modules/user.model';

const getUsers = (state: State): User => state.users;

export const selectUsersState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('usersStore');

export const selectUsers: MemoizedSelector<object, User> = createSelector(
  selectUsersState,
  getUsers
);

export const selectSearchUser: MemoizedSelector<object, User> = createSelector(
  selectUsersState,
  getUsers
);
