import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnPublishedBlogsComponent } from './un-published-blogs.component';

describe('UnPublishedBlogsComponent', () => {
  let component: UnPublishedBlogsComponent;
  let fixture: ComponentFixture<UnPublishedBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnPublishedBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnPublishedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
