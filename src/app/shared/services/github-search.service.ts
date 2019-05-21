import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modules/user.model';
@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  BASE_URL = 'https://api.github.com';
  USER_URL = '/search/users'
  constructor(private http: HttpClient) { }

  getUsers(user: string): Observable<User> {
    let params = new HttpParams().set('q', user);
    return this.http.get<User>(this.BASE_URL + this.USER_URL, { params: params });
  }

  getRepos(user: string): Observable<any> {
    const REPOS_URL = '/users/' + user + '/repos';
      return this.http.get<any>(this.BASE_URL + REPOS_URL);
  }
}
