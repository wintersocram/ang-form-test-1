import { AbstractControl, ValidationErrors } from '@angular/forms';

export class AddUsersValidator {
    static checkPasswordMatch(control: AbstractControl): ValidationErrors | null {
        let password = control.get('password');
        let confirmPassword = control.get('confirmPassword');

        if (!password.enabled && !confirmPassword.enabled)
            return null;

        if (password.value === confirmPassword.value)
            return null;

        return { PasswordDoesNotMatch: true };
    }
}