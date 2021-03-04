import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsPopupComponent } from './os-popup.component';

describe('OsPopupComponent', () => {
  let component: OsPopupComponent;
  let fixture: ComponentFixture<OsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
