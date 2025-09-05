import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVistaComponent } from './productos-vista.component';

describe('ProductosVistaComponent', () => {
  let component: ProductosVistaComponent;
  let fixture: ComponentFixture<ProductosVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductosVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
