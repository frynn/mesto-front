import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSpotComponent } from './post-spot.component';

describe('PostSpotComponent', () => {
  let component: PostSpotComponent;
  let fixture: ComponentFixture<PostSpotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSpotComponent]
    });
    fixture = TestBed.createComponent(PostSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
