import { Component, OnInit, Input } from '@angular/core';
import { UserItems } from 'src/app/shared/modules/user-items.model';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as UsersActions from 'src/app/shared/state/actions/users.actions';
import * as UsersSelectors from 'src/app/shared/state/selectors/users.selector';
import { map, finalize } from 'rxjs/operators';
@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {
  @Input()
  user: UserItems;
  $subData: Observable<any>;
  toggle = false;

  constructor(private store: Store<{ users: any; subdata: any }>) {}

  ngOnInit() {}

  pullUsersDetails(login: string): void {
    this.toggle = !this.toggle;
    if (this.toggle) {
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

  onSelectUser(selectedUser: any): void {
    this.store.dispatch(new UsersActions.SearchSubData(selectedUser.loging));
    this.store
      .select(UsersSelectors.selectSearchSubData)
      .subscribe(selectedUser =>
        this.store.dispatch(new UsersActions.SetSelectedUser(selectedUser))
      );
  }
}
