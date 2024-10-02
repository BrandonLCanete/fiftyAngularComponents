import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaofcirclesolverComponent } from './areaofcirclesolver.component';

describe('AreaofcirclesolverComponent', () => {
  let component: AreaofcirclesolverComponent;
  let fixture: ComponentFixture<AreaofcirclesolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaofcirclesolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaofcirclesolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
