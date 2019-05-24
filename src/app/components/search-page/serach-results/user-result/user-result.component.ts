import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserItems } from 'src/app/shared/modules/user-items.model';
import { Subscription, forkJoin, Observable, of } from 'rxjs';
import { GithubSearchService } from 'src/app/shared/services/github-search.service';
import { Store } from '@ngrx/store';
import * as UsersActions from 'src/app/shared/state/actions/users.actions';
import * as UsersSelectors from 'src/app/shared/state/selectors/users.selector';
import { finalize, map, find, take, filter, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/modules/user.model';
@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {
  @Input()
  user: UserItems;
  $subData: Observable<any>;

  constructor(private store: Store<{ users: any; subdata: any }>) {}

  ngOnInit() {}

  pullUsersDetails(login: string): void {
    this.store
      .select(UsersSelectors.selectSearchSubData)
      .pipe(map(users => users.find(user => user.user === login)))
      .subscribe(user => {
        user === undefined
          ? this.store.dispatch(new UsersActions.SearchSubData(login))
          : (this.$subData = of(user));
      });
  }
}
