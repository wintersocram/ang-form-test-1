import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddUsersValidator } from '../common/add-users-validation';
import { UsersService } from '../services/users.service';
import * as localData from '../local-data/data.json';
import * as localUsers from '../local-data/users.json';

@Component({
  selector: 'add-users-test2',
  templateUrl: './add-users-test2.component.html',
  styleUrls: ['./add-users-test2.component.css']
})
export class AddUsersTest2Component implements OnInit {
  usersForm: FormGroup;
  localUsers: any;
  localSampleData: any;
  // private _noPassword: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    // this.usersService.getUser();
    this.initForm();
  }

  initForm() {
    this.usersForm = new FormGroup(
      {
        firstname: new FormControl('',
          [
            Validators.required, 
            Validators.minLength(2)
          ]
        ),
        lastname: new FormControl('',
          [
            Validators.required, 
            Validators.minLength(2)
          ]
        ),
        username: new FormControl('',
          [
            Validators.required, 
            Validators.minLength(6)
          ]
        ),
        password: new FormControl('',
          [
            Validators.required, 
            Validators.minLength(8),
            Validators.maxLength(16)
          ]
        ),
        confirmPassword: new FormControl('',
          Validators.required
        ),
        noPassword: new FormControl(false)
      },
      {
        validators: AddUsersValidator.checkPasswordMatch 
      }
    );

    this.noPassword.valueChanges
      .subscribe(checked => {
        if (!checked) {
          this.password.enable();
          this.confirmPassword.enable();
        }
        else {
          this.password.disable();
          this.confirmPassword.disable();
        }
      });
  }

  onSubmit() {
    this.noPassword.disable();
    console.debug('[OnSubmit] this.usersForm: %o', this.usersForm);
    console.debug('[OnSubmit] value: %o', this.usersForm.value);
    // this.usersService.createUser(this.usersForm.value);
  }

  getLocalSampleData() {
    let _localSampleData = this.usersService.getLocalSampleData();
    this.localSampleData = (_localSampleData as any).default;

    console.log("getting local sample data (using UsersService)\nlocal Data: %o", _localSampleData);
    console.log("localDataFromUsersService: %o\nrequest finished!", this.localSampleData);
  }

  getLocalUsers() {
    this.localUsers = (localUsers as any).default;

    console.log("getting local users...\nlocal users: %o", localUsers);
    console.log("local user: %o\nrequest finished!", this.localUsers);
  }

  getLocalUserById(id: number) {
    let localUser = this.usersService.getLocalUserById(id);

    if (!localUser)
      console.error('The user with ID=%o was not found', id);
    else
      console.log("getting local user...\n\n\tid: %o\n\tuser: %o\n\nrequest finished!", id, localUser);
  }
  
  
  /* GETTERS and SETTERS */
  get firstname() {
    return this.usersForm.get('firstname');
  }
  get lastname() {
    return this.usersForm.get('lastname');
  }
  get username() {
    return this.usersForm.get('username');
  }
  get password() {
    return this.usersForm.get('password');
  }
  get confirmPassword() {
    return this.usersForm.get('confirmPassword');
  }
  get noPassword() {
    return this.usersForm.get('noPassword') as FormControl;
  }
  set firstname(value) {
    this.usersForm.get('firstname').setValue(value);
  }
  set lastname(value) {
    this.usersForm.get('lastname').setValue(value);
  }
  set username(value) {
    this.usersForm.get('username').setValue(value);
  }
  set password(value) {
    this.usersForm.get('password').setValue(value);
  }
  set confirmPassword(value) {
    this.usersForm.get('confirmPassword').setValue(value);
  }
  set noPassword(value) {
    this.usersForm.get('noPassword').setValue(value);
  }
}
