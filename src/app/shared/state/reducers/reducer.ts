import { ActionTypes, UserActions } from '../actions/users.actions';
import { initialState } from '../state';

export function searchReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return state;

    case ActionTypes.GET_USERS_SUCCESS:
      return { ...state, users: action.payload };

    case ActionTypes.SEARCH_USERS:
      return action.payload;

    case ActionTypes.SEARCH_SUB_DATA:
      return action.payload;

    case ActionTypes.GET_SUB_SUCCESS:
      return { ...state, subdata: action.payload };
    // return { ...state, subdata: [...state.subdata, action.payload] };

    case ActionTypes.RESET_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
}
