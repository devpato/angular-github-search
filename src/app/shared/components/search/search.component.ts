import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../../services/github-search.service';
import { Observable } from 'rxjs';
import { User } from '../../modules/user.model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  $githubSearch: Observable<User>;
  searchForm = this.fb.group({
    searchParam: ['', Validators.required]
  });

  constructor(
    private githubSearchService: GithubSearchService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.$githubSearch = this.githubSearchService.getUsers('devpato');
  }

  onSearch(): void {
    this.githubSearchService.setSearchParam(this.searchForm.value.searchParam);
    this.searchForm.reset();
  }
}
