import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { GithubSearchService } from 'src/app/shared/services/github-search.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-serach-results',
  templateUrl: './serach-results.component.html',
  styleUrls: ['./serach-results.component.scss']
})
export class SerachResultsComponent implements OnInit {
  @Input()
  users: User;

  constructor() {}

  ngOnInit(): void {}
}
