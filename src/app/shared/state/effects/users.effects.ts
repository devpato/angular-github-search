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
    ofType<any>(ActionTypes.SEARCH_SUB_DATA),
    map(action => action.payload),
    switchMap(payload => {
      return forkJoin(
        this.githubSearch.getRepos(payload),
        this.githubSearch.getFollowers(payload),
        this.githubSearch.getStarred(payload)
      ).pipe(
        map(
          ([repos, followers, starred]) =>
            new UserActions.SuccessSubData({
              user: payload,
              repos: repos,
              followers: followers,
              starred: starred
            })
        )
      );
    })
  );

  constructor(
    private actions$: Actions,
    private githubSearch: GithubSearchService,
    private store: Store<{ users: User; subdata: any }>
  ) {}
}
