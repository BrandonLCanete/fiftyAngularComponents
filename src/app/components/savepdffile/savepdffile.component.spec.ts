import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavepdffileComponent } from './savepdffile.component';

describe('SavepdffileComponent', () => {
  let component: SavepdffileComponent;
  let fixture: ComponentFixture<SavepdffileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavepdffileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavepdffileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
