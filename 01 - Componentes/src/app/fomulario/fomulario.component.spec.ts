import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioComponent } from './fomulario.component';

describe('FomularioComponent', () => {
  let component: FomularioComponent;
  let fixture: ComponentFixture<FomularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FomularioComponent]
    });
    fixture = TestBed.createComponent(FomularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
