import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSelectorComponent } from './post-selector.component';

describe('PostSelectorComponent', () => {
  let component: PostSelectorComponent;
  let fixture: ComponentFixture<PostSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSelectorComponent]
    });
    fixture = TestBed.createComponent(PostSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
