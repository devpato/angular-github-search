import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { UserBio } from '../models/user-bio.model';
import { UserOrgs } from '../models/user-orgs.model';
import { Repo } from '../models/repo.model';
@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  BASE_URL = 'https://api.github.com';
  USER_URL = '/search/users';
  constructor(private http: HttpClient) {}

  getUsers(user: string): Observable<User> {
    let params = new HttpParams().set('q', user);
    return this.http.get<User>(this.BASE_URL + this.USER_URL, {
      params: params
    });
  }

  getRepos(user: string): Observable<Repo[]> {
    const REPOS_URL = '/users/' + user + '/repos';
    return this.http.get<any>(this.BASE_URL + REPOS_URL);
  }

  getStarred(user: string): Observable<Repo[]> {
    const STARRED_URL = '/users/' + user + '/starred';
    return this.http.get<Repo[]>(this.BASE_URL + STARRED_URL);
  }

  getUserBio(user: string): Observable<UserBio> {
    const STARRED_URL = '/users/' + user;
    return this.http.get<UserBio>(this.BASE_URL + STARRED_URL);
  }

  getUserOrgs(user: string): Observable<UserOrgs[]> {
    const STARRED_URL = '/users/' + user + '/orgs';
    return this.http.get<UserOrgs[]>(this.BASE_URL + STARRED_URL);
  }
}
