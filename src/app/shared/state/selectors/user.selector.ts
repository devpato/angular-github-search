import {
  MemoizedSelector,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import { State } from '../state';
import { User } from '../../modules/user.model';

const getUsers = (state: State): User[] => state.users;

export const selectProjectsState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('usersStore');

export const selectUsers: MemoizedSelector<object, User[]> = createSelector(
  selectProjectsState,
  getUsers
);
