import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, forkJoin } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ActionTypes } from '../actions/users.actions';
import * as UserActions from '../actions/users.actions';
import { GithubSearchService } from '../../services/github-search.service';
import { UserFullProfile } from '../../models/user-full-profile';

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
      return forkJoin(
        this.githubSearch.getRepos(payload),
        this.githubSearch.getUserBio(payload),
        this.githubSearch.getStarred(payload),
        this.githubSearch.getUserOrgs(payload)
      ).pipe(
        map(
          ([repos, bio, starred, orgs]) =>
            new UserActions.SuccessSubData({
              user: payload,
              repos: repos,
              bio: bio,
              starred: starred,
              orgs: orgs
            })
        ),
        catchError(() =>
          of({ type: '[Users Subdata API] Users Subdata Loaded Error' })
        )
      );
    })
  );

  constructor(
    private actions$: Actions,
    private githubSearch: GithubSearchService
  ) {}
}
