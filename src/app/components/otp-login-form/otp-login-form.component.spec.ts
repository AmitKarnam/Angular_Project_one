import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpLoginFormComponent } from './otp-login-form.component';

describe('OtpLoginFormComponent', () => {
  let component: OtpLoginFormComponent;
  let fixture: ComponentFixture<OtpLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
