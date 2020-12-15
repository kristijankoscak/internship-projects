import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationSmallItemComponent } from './accommodation-small-item.component';

describe('AccommodationSmallItemComponent', () => {
  let component: AccommodationSmallItemComponent;
  let fixture: ComponentFixture<AccommodationSmallItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationSmallItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationSmallItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
