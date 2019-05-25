import {
  MemoizedSelector,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import { State } from '../state';
import { User } from '../../models/user.model';

const getUsers = (state: State): User => state.users;
const geSubData = (state: State): any => state.subdata;
const geSelectedUserData = (state: State): any => state.selectedUser;

export const selectUsersState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('usersStore');

export const selectSubDataState: MemoizedSelector<
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

export const selectSearchSubData: MemoizedSelector<
  object,
  any
> = createSelector(
  selectSubDataState,
  geSubData
);

export const geSelectedUserDataState: MemoizedSelector<
  object,
  any
> = createSelector(
  selectUsersState,
  geSelectedUserData
);
