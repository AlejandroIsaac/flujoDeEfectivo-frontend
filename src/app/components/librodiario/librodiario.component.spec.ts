import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrodiarioComponent } from './librodiario.component';

describe('LibrodiarioComponent', () => {
  let component: LibrodiarioComponent;
  let fixture: ComponentFixture<LibrodiarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrodiarioComponent]
    });
    fixture = TestBed.createComponent(LibrodiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
