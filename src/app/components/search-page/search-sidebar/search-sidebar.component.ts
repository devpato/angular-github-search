import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UsersSelectors from '../../../shared/state/selectors/users.selector';
import { Observable } from 'rxjs';
import { UserFullProfile } from 'src/app/shared/models/user-full-profile';

@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.scss']
})
export class SearchSidebarComponent implements OnInit {
  $selectedUser: Observable<UserFullProfile>;
  constructor(private store: Store<{ selectedUser: UserFullProfile }>) {}

  ngOnInit(): void {
    this.getSelectedUser();
  }

  getSelectedUser(): void {
    this.$selectedUser = this.store.select(
      UsersSelectors.geSelectedUserDataState
    );
  }
}
