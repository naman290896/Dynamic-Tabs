import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorklistComponent } from './my-worklist.component';

describe('MyWorklistComponent', () => {
  let component: MyWorklistComponent;
  let fixture: ComponentFixture<MyWorklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
