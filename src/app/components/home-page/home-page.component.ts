import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from 'src/app/shared/services/github-search.service';
import { User } from 'src/app/shared/modules/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  $githubSearch: Observable<User>;
  constructor(private githubSearchService: GithubSearchService) { }

  ngOnInit() {
     this.$githubSearch = this.githubSearchService.getUsers('devpato');
  }

}
