import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimelistadderComponent } from './animelistadder.component';

describe('AnimelistadderComponent', () => {
  let component: AnimelistadderComponent;
  let fixture: ComponentFixture<AnimelistadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimelistadderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimelistadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
