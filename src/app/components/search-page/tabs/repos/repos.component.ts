import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UsersSelectors from '../../../../shared/state/selectors/users.selector';
import { UserFullProfile } from 'src/app/shared/models/user-full-profile';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
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
  whatLanguageIsMyRepo(language: string): string {
    switch (language) {
      case 'JavaScript':
        return 'JavaScript';

      case 'HTML':
        return 'HTML';

      case 'TypeScript':
        return 'TypeScript';

      case 'C#':
        return 'c-sharp';

      default:
        return 'other-language';
    }
  }
}
