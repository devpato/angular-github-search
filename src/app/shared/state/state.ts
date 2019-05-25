import { User } from '../models/user.model';
import { UserFullProfile } from '../models/user-full-profile';

export interface State {
  users: User[];
  subdata: UserFullProfile[];
  selectedUser: UserFullProfile;
}

export const initialState = {
  users: null,
  subdata: [],
  selectedUser: null
};
