import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasFormComponent } from './zonas-form.component';

describe('ZonasFormComponent', () => {
  let component: ZonasFormComponent;
  let fixture: ComponentFixture<ZonasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZonasFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZonasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
