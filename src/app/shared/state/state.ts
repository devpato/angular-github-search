import { User } from '../models/user.model';

export interface State {
  users: any;
  subdata: any;
  selectedUser: any;
}

export const initialState = {
  users: null,
  subdata: [],
  selectedUser: null
};
