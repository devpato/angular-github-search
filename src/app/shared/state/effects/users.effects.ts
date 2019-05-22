import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of, forkJoin } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ActionTypes } from '../actions/users.actions';
import * as UserActions from '../actions/users.actions';
import { GithubSearchService } from '../../services/github-search.service';
import { Store } from '@ngrx/store';
import { User } from '../../modules/user.model';
@Injectable()
export class UsersEffects {
  subData = [];
  user: string;
  @Effect()
  users$ = this.actions$.pipe(
    ofType(ActionTypes.SEARCH_USERS),
    map(action => action['payload']),
    switchMap(payload =>
      this.githubSearch.getUsers(payload).pipe(
        map(res => new UserActions.GetUsersSuccess(res)),
        catchError(() => of({ type: '[Users API] Users Loaded Error' }))
      )
    )
  );

  @Effect()
  subData$ = this.actions$.pipe(
    ofType(ActionTypes.SEARCH_SUB_DATA),
    map(action => action['payload']),
    switchMap(payload => {
      const repos = this.githubSearch.getRepos(payload);
      const followers = this.githubSearch.getFollowers(payload);
      const starred = this.githubSearch.getStarred(payload);
      let arrayResults = [];
      forkJoin([repos, followers, starred]).subscribe(results => {
        this.store.dispatch(
          new UserActions.SuccessSubData({
            user: payload,
            repos: results[0],
            followers: results[1],
            starred: results[2]
          })
        );
      });
      return arrayResults;
    })
  );

  constructor(
    private actions$: Actions,
    private githubSearch: GithubSearchService,
    private store: Store<{ users: User; subdata: any }>
  ) {}
}
