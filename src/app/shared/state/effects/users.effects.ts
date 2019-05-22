import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { ActionTypes } from '../actions/users.actions';
import * as UserActions from '../actions/users.actions';
import { GithubSearchService } from '../../services/github-search.service';
@Injectable()
export class UsersEffects {
  @Effect()
  users$ = this.actions$.pipe(
    ofType(ActionTypes.GET_USERS),
    switchMap(() =>
      this.githubSearch.getUsers('').pipe(
        map(res => {
          return res;
        }), //CHECK THIS LINE
        catchError(() => of({ type: '[Users API] Users Loaded Error' }))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private githubSearch: GithubSearchService
  ) {}
}
