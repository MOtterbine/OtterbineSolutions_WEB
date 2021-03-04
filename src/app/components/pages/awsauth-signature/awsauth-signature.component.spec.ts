import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AWSAuthSignatureComponent } from './awsauth-signature.component';

describe('AWSAuthSignatureComponent', () => {
  let component: AWSAuthSignatureComponent;
  let fixture: ComponentFixture<AWSAuthSignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AWSAuthSignatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AWSAuthSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
