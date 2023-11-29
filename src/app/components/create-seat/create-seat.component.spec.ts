import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeatComponent } from './create-seat.component';

describe('CreateSeatComponent', () => {
  let component: CreateSeatComponent;
  let fixture: ComponentFixture<CreateSeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSeatComponent]
    });
    fixture = TestBed.createComponent(CreateSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
