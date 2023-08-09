import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example05Component } from './example05.component';

describe('Example05Component', () => {
  let component: Example05Component;
  let fixture: ComponentFixture<Example05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Example05Component]
    });
    fixture = TestBed.createComponent(Example05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
