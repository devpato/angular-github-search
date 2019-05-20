import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modules/user.model';
@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  BASE_URL = 'https://api.github.com/search/users'
  constructor(private http: HttpClient) { }

  getUsers(user: string): Observable<User> {
    let params = new HttpParams().set('q', user);
    return this.http.get<User>(this.BASE_URL, { params: params });
  }
}
