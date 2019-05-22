import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/modules/user.model';
import { Store } from '@ngrx/store';
import * as UsersSelectors from '../../shared/state/selectors/users.selector';
import * as UsersActions from '../../shared/state/actions/users.actions';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  $users: Observable<User>;
  $userngrx: Observable<User>;
  constructor(private store: Store<{ projects: User }>) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.store.select(UsersSelectors.selectUsers).subscribe(res => {
      this.$users = of(res);
    });
  }
}
