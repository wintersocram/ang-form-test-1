import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AddUsersValidator {
    static checkPasswordMatch(control: AbstractControl): ValidationErrors | null {
        let password = control.get('password').value;
        let confirmPassword = control.get('confirmPassword').value;

        if (!password.enabled && !confirmPassword.enabled)
            return null;

        if (password === confirmPassword)
            return null;

        return { PasswordDoesNotMatch: true };
    }
}