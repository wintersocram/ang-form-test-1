import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddUsersValidator } from '../common/add-users-validation';

@Component({
  selector: 'add-users-test2',
  templateUrl: './add-users-test2.component.html',
  styleUrls: ['./add-users-test2.component.css']
})
export class AddUsersTest2Component implements OnInit {
  usersForm: FormGroup;
  // private _noPassword: boolean = false;

  ngOnInit() {
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
  }X 
}
