import { User } from '../modules/user.model';

export interface State {
  users: User[];
}

export const initialState = {
  users: null
};
