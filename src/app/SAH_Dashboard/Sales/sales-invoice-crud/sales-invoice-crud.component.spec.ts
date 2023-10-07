import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesInvoiceCrudComponent } from './sales-invoice-crud.component';

describe('SalesInvoiceCrudComponent', () => {
  let component: SalesInvoiceCrudComponent;
  let fixture: ComponentFixture<SalesInvoiceCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesInvoiceCrudComponent]
    });
    fixture = TestBed.createComponent(SalesInvoiceCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
