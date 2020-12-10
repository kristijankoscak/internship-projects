import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCityPersonsItemComponent } from './explore-city-persons-item.component';

describe('ExploreCityPersonsItemComponent', () => {
  let component: ExploreCityPersonsItemComponent;
  let fixture: ComponentFixture<ExploreCityPersonsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCityPersonsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCityPersonsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
