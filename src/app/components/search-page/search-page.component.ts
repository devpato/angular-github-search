import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { Store } from '@ngrx/store';
import * as UsersSelectors from '../../shared/state/selectors/users.selector';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  $users: Observable<User>;
  $userStoreSubscrition: Subscription;
  constructor(private store: Store<{ users: User[] }>) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.$userStoreSubscrition = this.store
      .select(UsersSelectors.selectUsers)
      .subscribe(res => {
        this.$users = of(res);
      });
  }

  ngOnDestroy(): void {
    if (this.$userStoreSubscrition) {
      this.$userStoreSubscrition.unsubscribe;
    }
  }
}
