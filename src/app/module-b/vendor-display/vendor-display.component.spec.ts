import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDisplayComponent } from './vendor-display.component';

describe('VendorDisplayComponent', () => {
  let component: VendorDisplayComponent;
  let fixture: ComponentFixture<VendorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
