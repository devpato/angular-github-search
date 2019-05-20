import { TestBed } from '@angular/core/testing';

import { GithubSearchService } from './github-search.service';

describe('GithubSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubSearchService = TestBed.get(GithubSearchService);
    expect(service).toBeTruthy();
  });
});
