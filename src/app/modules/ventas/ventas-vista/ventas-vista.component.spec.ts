import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasVistaComponent } from './ventas-vista.component';

describe('VentasVistaComponent', () => {
  let component: VentasVistaComponent;
  let fixture: ComponentFixture<VentasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentasVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
