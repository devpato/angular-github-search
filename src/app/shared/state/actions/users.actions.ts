import { Action } from '@ngrx/store';
import { User } from '../../modules/user.model';

export enum ActionTypes {
  GET_USERS = '[Get Users Component] GetUsers',
  SEARCH_USERS = '[Search Component] SearchUsers',
  GET_USERS_SUCCESS = '[ Success Search Component] GetUsersSuccess',
  RESET_USERS = '[Reset] ResetUsers'
}

export class GetUsers implements Action {
  readonly type = ActionTypes.GET_USERS;
}

export class SearchUsers implements Action {
  readonly type = ActionTypes.SEARCH_USERS;
  constructor(public payload: string) {}
}

export class ResetUsers implements Action {
  readonly type = ActionTypes.RESET_USERS;
  constructor(public payload: User) {}
}

export class GetUsersSuccess implements Action {
  readonly type = ActionTypes.GET_USERS_SUCCESS;
  constructor(public payload: User) {}
}

export type UserActions = GetUsers | SearchUsers | GetUsersSuccess | ResetUsers;
