import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/modules/user.model';
import { GithubSearchService } from 'src/app/shared/services/github-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-serach-results',
  templateUrl: './serach-results.component.html',
  styleUrls: ['./serach-results.component.scss']
})
export class SerachResultsComponent implements OnInit {
  @Input()
  users: User;
  reposCount = 0;


  $userRepos: Observable<any>;
  constructor(private githubSearchService: GithubSearchService) { }

  ngOnInit() {

  }

  getRepos(user: string) {
    this.githubSearchService.getRepos(user).subscribe(repos=> {
      console.log(repos.length);
      this.reposCount = repos.length;
    });
  }
}
