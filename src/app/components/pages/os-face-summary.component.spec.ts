import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsFaceSummaryComponent } from './os-face-summary.component';

describe('OsFaceSummaryComponent', () => {
  let component: OsFaceSummaryComponent;
  let fixture: ComponentFixture<OsFaceSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsFaceSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsFaceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
