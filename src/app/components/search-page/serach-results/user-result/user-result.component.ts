import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserItems } from 'src/app/shared/modules/user-items.model';
import { Subscription, forkJoin } from 'rxjs';
import { GithubSearchService } from 'src/app/shared/services/github-search.service';
import { Store } from '@ngrx/store';
import * as UsersActions from 'src/app/shared/state/actions/users.actions';
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
  $allCallsSubcription: Subscription;
  subData = [];

  constructor(
    private githubSearchService: GithubSearchService,
    private store: Store<{ users: any; subdata: any }>
  ) {}

  ngOnInit() {
    this.arrSuscriptions = [];
  }

  /*Note: I know I could've make an observable and use the aync pipe in the HTML. I could have also use NgRX to store the data,
   but it didn't make sense to me since the data can change at any time.
   I just wanted you to see I know how to do other things .
   */

  pullUsersDetails(user: string): void {
    let repos = this.githubSearchService.getRepos(user);
    let followers = this.githubSearchService.getFollowers(user);
    let starred = this.githubSearchService.getStarred(user);
    this.$allCallsSubcription = forkJoin([repos, followers, starred]).subscribe(
      results => {
        this.subData = results;
      }
    );
    //this.store.dispatch(new UsersActions.SearchSubData(user));
  }

  ngOnDestroy(): void {
    if (this.$allCallsSubcription) {
      this.$allCallsSubcription.unsubscribe;
    }
  }
}
