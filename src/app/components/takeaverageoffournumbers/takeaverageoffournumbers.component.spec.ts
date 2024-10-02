import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeaverageoffournumbersComponent } from './takeaverageoffournumbers.component';

describe('TakeaverageoffournumbersComponent', () => {
  let component: TakeaverageoffournumbersComponent;
  let fixture: ComponentFixture<TakeaverageoffournumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeaverageoffournumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeaverageoffournumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
