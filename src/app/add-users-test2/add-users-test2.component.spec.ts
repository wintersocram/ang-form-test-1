import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersTest2Component } from './add-users-test2.component';

describe('AddUsersTest2Component', () => {
  let component: AddUsersTest2Component;
  let fixture: ComponentFixture<AddUsersTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsersTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
