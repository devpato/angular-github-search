import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../modules/user.model';
@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  BASE_URL = 'https://api.github.com';
  USER_URL = '/search/users';
  private searchParamSource = new BehaviorSubject<string>(null);
  searchParam = this.searchParamSource.asObservable();
  constructor(private http: HttpClient) {}

  getUsers(user: string): Observable<User> {
    console.log(user);
    let params = new HttpParams().set('q', user);
    return this.http.get<User>(this.BASE_URL + this.USER_URL, {
      params: params
    });
  }

  getRepos(user: string): Observable<any> {
    const REPOS_URL = '/users/' + user + '/repos';
    return this.http.get<any>(this.BASE_URL + REPOS_URL);
  }

  getFollowers(user: string): Observable<any> {
    const FOLLOWERS_URL = '/users/' + user + '/followers';
    return this.http.get<any>(this.BASE_URL + FOLLOWERS_URL);
  }

  getStarred(user: string): Observable<any> {
    const STARRED_URL = '/users/' + user + '/starred';
    return this.http.get<any>(this.BASE_URL + STARRED_URL);
  }

  setSearchParam(searchParam: string): void {
    this.searchParamSource.next(searchParam);
  }
}
