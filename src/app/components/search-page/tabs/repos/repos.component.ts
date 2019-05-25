import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/modules/user.model';
import * as UsersSelectors from '../../../../shared/state/selectors/users.selector';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  $selectedUser: Observable<any>;
  constructor(private store: Store<{ users: User }>) {}

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
