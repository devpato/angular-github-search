import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserItems } from 'src/app/shared/modules/user-items.model';
import { Subscription } from 'rxjs';
import { GithubSearchService } from 'src/app/shared/services/github-search.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit, OnDestroy {
  @Input()
  user: UserItems;
  reposCount: number;
  followersCount: number;
  starredCount: number;
  arrSuscriptions: Subscription[];
  $reposSubscription: Subscription;
  $followersSubscrition: Subscription;
  $starredSubscription: Subscription;

  constructor(private githubSearchService: GithubSearchService) {}

  ngOnInit() {
    this.arrSuscriptions = [];
  }

  /*Note: I know I could've make some observable and use the aync pipe in the HTML, I just wanted you to see I know how to do other things */
  getRepos(user: string) {
    this.$reposSubscription = this.githubSearchService
      .getRepos(user)
      .subscribe(repos => {
        this.reposCount = repos.length;
      });
    this.arrSuscriptions.push(this.$reposSubscription);
  }

  getFollowers(user: string) {
    this.$followersSubscrition = this.githubSearchService
      .getFollowers(user)
      .subscribe(followers => {
        this.followersCount = followers.length;
      });
    this.arrSuscriptions.push(this.$followersSubscrition);
  }

  getStarred(user: string) {
    this.$starredSubscription = this.githubSearchService
      .getStarred(user)
      .subscribe(starred => {
        this.starredCount = starred.length;
      });
    this.arrSuscriptions.push(this.$starredSubscription);
  }

  pullUsersDetails(user: string) {
    this.getRepos(user);
    this.getFollowers(user);
    this.getStarred(user);
  }

  ngOnDestroy() {
    this.arrSuscriptions.map(sus => {
      if (sus) {
        sus.unsubscribe();
      }
    });
  }
}
