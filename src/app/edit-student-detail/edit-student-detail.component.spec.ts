import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentDetailComponent } from './edit-student-detail.component';

describe('EditStudentDetailComponent', () => {
  let component: EditStudentDetailComponent;
  let fixture: ComponentFixture<EditStudentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
