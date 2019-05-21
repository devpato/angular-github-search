import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResultComponent } from './user-result.component';

describe('UserResultComponent', () => {
  let component: UserResultComponent;
  let fixture: ComponentFixture<UserResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
