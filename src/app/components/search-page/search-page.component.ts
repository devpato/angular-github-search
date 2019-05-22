import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/shared/services/github-search.service';
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
  constructor(
    private githubSearchService: GithubSearchService,
    private store: Store<{ projects: User }>
  ) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.githubSearchService.searchParam.subscribe(param => {
      this.$users = this.githubSearchService.getUsers(param);
    });
  }

  getUsers() {
    this.$userngrx = this.githubSearchService.getUsers('dev');
    this.store.dispatch(new UsersActions.GetUsers());
    this.store.select(UsersSelectors.selectUsers).subscribe(res => {
      this.$userngrx = of(res);
    });
  }
}
