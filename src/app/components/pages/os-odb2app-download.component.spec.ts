import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ODB2AppDownloadComponent } from './os-odb2app-download.component';

describe('ODB2AppDownloadComponent', () => {
  let component: ODB2AppDownloadComponent;
  let fixture: ComponentFixture<ODB2AppDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ODB2AppDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ODB2AppDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
