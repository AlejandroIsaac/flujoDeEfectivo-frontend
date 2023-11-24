import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibromayorComponent } from './libromayor.component';

describe('LibromayorComponent', () => {
  let component: LibromayorComponent;
  let fixture: ComponentFixture<LibromayorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibromayorComponent]
    });
    fixture = TestBed.createComponent(LibromayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
