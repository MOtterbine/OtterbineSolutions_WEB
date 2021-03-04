import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashingExampleComponent } from './hashing-example.component';

describe('HashingExampleComponent', () => {
  let component: HashingExampleComponent;
  let fixture: ComponentFixture<HashingExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashingExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
