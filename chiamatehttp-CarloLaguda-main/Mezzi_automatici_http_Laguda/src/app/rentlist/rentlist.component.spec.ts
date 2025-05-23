import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentlistComponent } from './rentlist.component';

describe('RentlistComponent', () => {
  let component: RentlistComponent;
  let fixture: ComponentFixture<RentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
