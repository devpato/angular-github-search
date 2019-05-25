import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { Store } from '@ngrx/store';
import * as UsersSelectors from '../../shared/state/selectors/users.selector';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  $users: Observable<User[]>;
  constructor(private store: Store<{ users: User[] }>) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.$users = this.store.select(UsersSelectors.selectUsers);
  }
}
