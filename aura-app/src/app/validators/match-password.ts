import { FormGroup, ValidationErrors } from '@angular/forms';


export function matchPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.get(passwordKey);
    const confirmPassword = formGroup.get(confirmPasswordKey);

    if (!password || !confirmPassword) return null;

    if (confirmPassword.errors && !confirmPassword.errors['mismatch']) {
      
      return null;
    }

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }

    return null;
  };
}


