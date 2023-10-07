import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderCrudComponent } from './vender-crud.component';

describe('VenderCrudComponent', () => {
  let component: VenderCrudComponent;
  let fixture: ComponentFixture<VenderCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenderCrudComponent]
    });
    fixture = TestBed.createComponent(VenderCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
