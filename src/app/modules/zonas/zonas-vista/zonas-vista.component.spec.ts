import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasVistaComponent } from './zonas-vista.component';

describe('ZonasVistaComponent', () => {
  let component: ZonasVistaComponent;
  let fixture: ComponentFixture<ZonasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZonasVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZonasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
