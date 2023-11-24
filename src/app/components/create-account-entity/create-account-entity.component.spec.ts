import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountEntityComponent } from './create-account-entity.component';

describe('CreateAccountEntityComponent', () => {
  let component: CreateAccountEntityComponent;
  let fixture: ComponentFixture<CreateAccountEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAccountEntityComponent]
    });
    fixture = TestBed.createComponent(CreateAccountEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
