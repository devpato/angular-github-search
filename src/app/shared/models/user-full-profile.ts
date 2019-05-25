import { Repo } from './repo.model';
import { UserOrgs } from './user-orgs.model';
import { UserBio } from './user-bio.model';

export interface UserFullProfile {
  user: string;
  repos: Repo[];
  bio: UserBio;
  starred: Repo[];
  orgs: UserOrgs[];
}
