import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingbooksComponent } from './trendingbooks.component';

describe('TrendingbooksComponent', () => {
  let component: TrendingbooksComponent;
  let fixture: ComponentFixture<TrendingbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
