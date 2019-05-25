import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserFullProfile } from '../../models/user-full-profile';

export enum ActionTypes {
  GET_USERS = '[Get Users Component] GetUsers',
  SEARCH_USERS = '[Search Component] SearchUsers',
  GET_USERS_SUCCESS = '[ Success Search Component] GetUsersSuccess',
  RESET_USERS = '[Reset] ResetUsers',
  SEARCH_SUB_DATA = '[ Search sub data] SearchSubData',
  GET_SUB_SUCCESS = '[ Success Search Sub Data] SuccessSubData',
  SET_SELECTED_USER = '[Get Selected User] SetSelectedUser'
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

export class SearchSubData implements Action {
  readonly type = ActionTypes.SEARCH_SUB_DATA;
  constructor(public payload: string) {}
}

export class SetSelectedUser implements Action {
  readonly type = ActionTypes.SET_SELECTED_USER;
  constructor(public payload: UserFullProfile) {}
}

export class SuccessSubData implements Action {
  readonly type = ActionTypes.GET_SUB_SUCCESS;
  constructor(public payload: UserFullProfile) {}
}

export class GetUsersSuccess implements Action {
  readonly type = ActionTypes.GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export type UserActions =
  | GetUsers
  | SearchUsers
  | GetUsersSuccess
  | ResetUsers
  | SearchSubData
  | SuccessSubData
  | SetSelectedUser;
