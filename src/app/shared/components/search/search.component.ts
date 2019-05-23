import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../../services/github-search.service';
import { User } from '../../modules/user.model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UsersActions from '../../state/actions/users.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm = this.fb.group({
    searchParam: ['', Validators.required]
  });

  constructor(
    private githubSearchService: GithubSearchService,
    private fb: FormBuilder,
    private store: Store<{ users: User }>
  ) {}

  ngOnInit() {
    this.pullData('thisdot');
  }

  onSearch(): void {
    this.pullData(this.searchForm.value.searchParam);
    this.searchForm.reset();
  }

  pullData(user: string) {
    this.store.dispatch(new UsersActions.ResetUsers(null));
    this.store.dispatch(new UsersActions.SearchUsers(user));
  }
}
