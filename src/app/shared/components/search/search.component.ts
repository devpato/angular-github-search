import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../../services/github-search.service';
import { Observable } from 'rxjs';
import { User } from '../../modules/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  $githubSearch: Observable<User>;

  constructor(private githubSearchService: GithubSearchService) { }

  ngOnInit() {
    this.$githubSearch = this.githubSearchService.getUsers('devpato');
  }
}
