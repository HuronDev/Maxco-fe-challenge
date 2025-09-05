import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresVistaComponent } from './vendedores-vista.component';

describe('VendedoresVistaComponent', () => {
  let component: VendedoresVistaComponent;
  let fixture: ComponentFixture<VendedoresVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendedoresVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VendedoresVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
