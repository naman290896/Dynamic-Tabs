import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPinComponent } from './my-pin.component';

describe('MyPinComponent', () => {
  let component: MyPinComponent;
  let fixture: ComponentFixture<MyPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
