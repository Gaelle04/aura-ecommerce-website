import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedForYou } from './recommended-for-you';

describe('RecommendedForYou', () => {
  let component: RecommendedForYou;
  let fixture: ComponentFixture<RecommendedForYou>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedForYou]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedForYou);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
