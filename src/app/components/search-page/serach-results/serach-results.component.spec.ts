import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachResultsComponent } from './serach-results.component';

describe('SerachResultsComponent', () => {
  let component: SerachResultsComponent;
  let fixture: ComponentFixture<SerachResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
