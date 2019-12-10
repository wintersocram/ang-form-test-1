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
  idRef: number = 0;
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
    if (this.addCurrentUserToLocal())
      this.resetForm();
  }

  getLocalUsers() {
    console.log('getting users...');
    console.log('\tusers: %o', this.usersService.users);
  }

  getLocalUserById() {
    let id = this.idRef;
    let localUser = this.usersService.getUser(id);

    if (!localUser)
      console.error('The user with ID=%o was not found', id);
    else
      console.log("getting local user...\n\n\tid: %o\n\tuser: %o\n\nrequest finished!", id, localUser);
  }

  private addCurrentUserToLocal() {
    if (this.isUsersValid(this.usersForm.value)) {
      this.usersService.insertUser(this.usersForm.value);
      return true;
    }

    console.error('current user is not valid: %o', this.usersForm);
    return false;
  }

  private resetForm() {
    this.initForm();
  }

  /* Double check validation */
  private isUsersValid(user: object) {
    console.log(this.usersForm);
    return this.usersForm.valid;
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
