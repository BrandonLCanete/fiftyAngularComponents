import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplequizgameComponent } from './simplequizgame.component';

describe('SimplequizgameComponent', () => {
  let component: SimplequizgameComponent;
  let fixture: ComponentFixture<SimplequizgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplequizgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplequizgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
