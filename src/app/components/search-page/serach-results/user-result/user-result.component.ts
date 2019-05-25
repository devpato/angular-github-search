import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserItems } from 'src/app/shared/models/user-items.model';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as UsersActions from 'src/app/shared/state/actions/users.actions';
import * as UsersSelectors from 'src/app/shared/state/selectors/users.selector';
import { map } from 'rxjs/operators';
import { UiService } from 'src/app/shared/services/ui.service';
import { UserFullProfile } from 'src/app/shared/models/user-full-profile';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit, OnDestroy {
  @Input()
  user: UserItems;
  $subData: Observable<UserFullProfile>;
  selectedUser: UserFullProfile;
  $usersSubscrition: Subscription;

  constructor(
    private store: Store<{ selectedUser: UserFullProfile }>,
    private uiService: UiService
  ) {}

  ngOnInit(): void {}

  onSelectUser(selectedUser: UserItems): void {
    this.uiService.setTabSelected(false);
    this.store.dispatch(new UsersActions.SetSelectedUser(null));
    this.$usersSubscrition = this.store
      .select(UsersSelectors.selectSearchSubData)
      .pipe(
        map(usersSubdata =>
          usersSubdata.find(userSD => userSD.user === selectedUser.login)
        )
      )
      .subscribe(selected => {
        selected === undefined
          ? this.store.dispatch(
              new UsersActions.SearchSubData(selectedUser.login)
            )
          : this.store.dispatch(new UsersActions.SetSelectedUser(selected));
        this.uiService.setTabSelected(true);
      });
  }

  ngOnDestroy(): void {
    if (this.$usersSubscrition) {
      this.$usersSubscrition.unsubscribe();
    }
  }
}
