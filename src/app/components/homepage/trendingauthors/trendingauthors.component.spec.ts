import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingauthorsComponent } from './trendingauthors.component';

describe('TrendingauthorsComponent', () => {
  let component: TrendingauthorsComponent;
  let fixture: ComponentFixture<TrendingauthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingauthorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingauthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
