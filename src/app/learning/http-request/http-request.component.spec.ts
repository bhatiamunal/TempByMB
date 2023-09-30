import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HTTPRequestComponent } from './http-request.component';

describe('HTTPRequestComponent', () => {
  let component: HTTPRequestComponent;
  let fixture: ComponentFixture<HTTPRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HTTPRequestComponent]
    });
    fixture = TestBed.createComponent(HTTPRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
