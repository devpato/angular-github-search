import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of, forkJoin } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ActionTypes } from '../actions/users.actions';
import * as UserActions from '../actions/users.actions';
import { GithubSearchService } from '../../services/github-search.service';
@Injectable()
export class SubDataEffects {
  searchParam: string;
  @Effect()
  users$ = this.actions$.pipe(
    ofType(ActionTypes.SEARCH_SUB_DATA),
    map(action => action['payload']),
    switchMap(payload => {
      let repos = this.githubSearch.getRepos(payload);
      let followers = this.githubSearch.getFollowers(payload);
      let starred = this.githubSearch.getStarred(payload);
      let arrayResultls = [];
      forkJoin([repos, followers, starred]).subscribe(results => {
        arrayResultls = results;
      });
      return arrayResultls;
    })
  );

  constructor(
    private actions$: Actions,
    private githubSearch: GithubSearchService
  ) {}
}
