import { Component, OnInit } from "@angular/core";
import { GithubSearchService } from "src/app/shared/services/github-search.service";
import { Observable } from "rxjs";
import { User } from "src/app/shared/modules/user.model";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"]
})
export class SearchPageComponent implements OnInit {
  $users: Observable<User>;
  constructor(private githubSearchService: GithubSearchService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.githubSearchService.searchParam.subscribe(param => {
      this.$users = this.githubSearchService.getUsers(param);
    });
  }
}
