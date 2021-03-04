import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSummaryComponent } from './bottom-summary.component';

describe('BottomSummaryComponent', () => {
  let component: BottomSummaryComponent;
  let fixture: ComponentFixture<BottomSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
