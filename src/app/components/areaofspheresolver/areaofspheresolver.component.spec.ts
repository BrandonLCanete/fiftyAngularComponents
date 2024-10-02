import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaofspheresolverComponent } from './areaofspheresolver.component';

describe('AreaofspheresolverComponent', () => {
  let component: AreaofspheresolverComponent;
  let fixture: ComponentFixture<AreaofspheresolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaofspheresolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaofspheresolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
