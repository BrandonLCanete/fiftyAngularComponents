import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatthebossComponent } from './beattheboss.component';

describe('BeatthebossComponent', () => {
  let component: BeatthebossComponent;
  let fixture: ComponentFixture<BeatthebossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatthebossComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatthebossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
