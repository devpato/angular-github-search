import { ActionTypes, UserActions } from '../actions/users.actions';
import { initialState } from '../state';

export function searchReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return state;

    case ActionTypes.SEARCH_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
}
