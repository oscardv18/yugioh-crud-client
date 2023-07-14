import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAllComponent } from './cards-all.component';

describe('CardsAllComponent', () => {
  let component: CardsAllComponent;
  let fixture: ComponentFixture<CardsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
