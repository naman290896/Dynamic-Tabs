import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPatientComponent } from './my-patient.component';

describe('MyPatientComponent', () => {
  let component: MyPatientComponent;
  let fixture: ComponentFixture<MyPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
