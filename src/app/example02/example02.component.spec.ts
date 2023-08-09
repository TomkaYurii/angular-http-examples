import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example02Component } from './example02.component';

describe('Example02Component', () => {
  let component: Example02Component;
  let fixture: ComponentFixture<Example02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Example02Component]
    });
    fixture = TestBed.createComponent(Example02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
