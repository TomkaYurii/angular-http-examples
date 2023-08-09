import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example06Component } from './example06.component';

describe('Example06Component', () => {
  let component: Example06Component;
  let fixture: ComponentFixture<Example06Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Example06Component]
    });
    fixture = TestBed.createComponent(Example06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
