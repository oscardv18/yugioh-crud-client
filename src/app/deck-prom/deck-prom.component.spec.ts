import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckPromComponent } from './deck-prom.component';

describe('DeckPromComponent', () => {
  let component: DeckPromComponent;
  let fixture: ComponentFixture<DeckPromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckPromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckPromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
