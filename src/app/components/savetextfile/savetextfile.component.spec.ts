import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavetextfileComponent } from './savetextfile.component';

describe('SavetextfileComponent', () => {
  let component: SavetextfileComponent;
  let fixture: ComponentFixture<SavetextfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavetextfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavetextfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
