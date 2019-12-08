import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-users-test1',
  templateUrl: './add-users-test1.component.html',
  styleUrls: ['./add-users-test1.component.css']
})
export class AddUsersTest1Component {
  // newUsersForm = new FormGroup({
  //   firstname: new FormControl(),
  //   lastname: new FormControl(),
  //   username: new FormControl(),
  //   password: new FormControl(),
  //   confirmPassword: new FormControl()
  // });
  usersForm = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
  private _noPassword: boolean = false;

  onSubmit(viewForm: NgForm) {
    console.debug('[OnSubmit] viewForm: %o', viewForm);
    console.debug('[OnSubmit] this.usersForm: %o', this.usersForm);
  }

  get firstname() {
    return this.usersForm.firstname;
  }
  get lastname() {
    return this.usersForm.lastname;
  }
  get username() {
    return this.usersForm.username;
  }
  get password() {
    return this.usersForm.password;
  }
  get confirmPassword() {
    return this.usersForm.confirmPassword;
  }
  set noPassword(value) {
    this._noPassword = value || false;
  }
  get noPassword() {
    return this._noPassword;
  }X 
}
