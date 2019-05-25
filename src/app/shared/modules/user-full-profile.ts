import { Repo } from './repo.model';
import { UserBio } from '../models/user-bio.model';
import { UserOrgs } from './user-orgs.model';

export interface UserFullProfile {
  user: string;
  repos: Repo[];
  bio: UserBio;
  starred: Repo[];
  ors: UserOrgs[];
}
