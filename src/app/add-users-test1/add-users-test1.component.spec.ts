import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersTest1Component } from './add-users-test1.component';

describe('Form1Component', () => {
  let component: AddUsersTest1Component;
  let fixture: ComponentFixture<AddUsersTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsersTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
