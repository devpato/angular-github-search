import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/modules/user.model';
import * as UsersSelectors from '../../../shared/state/selectors/users.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.scss']
})
export class SearchSidebarComponent implements OnInit {
  $selectedUser: Observable<any>;
  constructor(private store: Store<{ users: User }>) {}

  ngOnInit() {
    this.getSelectedUser();
  }

  getSelectedUser(): void {
    this.$selectedUser = this.store.select(
      UsersSelectors.geSelectedUserDataState
    );
  }
}
