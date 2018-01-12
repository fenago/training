import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnPublishedListComponent } from './un-published-list.component';

describe('UnPublishedListComponent', () => {
  let component: UnPublishedListComponent;
  let fixture: ComponentFixture<UnPublishedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnPublishedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnPublishedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
