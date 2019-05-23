import { User } from '../modules/user.model';

export interface State {
  users: any;
  subdata: any;
}

export const initialState = {
  users: null,
  subdata: null
};
