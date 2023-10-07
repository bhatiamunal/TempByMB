import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseInvoiceCrudComponent } from './purchase-invoice-crud.component';

describe('PurchaseInvoiceCrudComponent', () => {
  let component: PurchaseInvoiceCrudComponent;
  let fixture: ComponentFixture<PurchaseInvoiceCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseInvoiceCrudComponent]
    });
    fixture = TestBed.createComponent(PurchaseInvoiceCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
