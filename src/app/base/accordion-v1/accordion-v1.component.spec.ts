import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionV1Component } from './accordion-v1.component';

describe('AccordionV1Component', () => {
  let component: AccordionV1Component;
  let fixture: ComponentFixture<AccordionV1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionV1Component]
    });
    fixture = TestBed.createComponent(AccordionV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
