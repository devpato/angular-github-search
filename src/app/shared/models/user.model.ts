import { UserItems } from './user-items.model';

export interface User {
  total_count: number;
  incomplete_results: boolean;
  items: UserItems;
}
