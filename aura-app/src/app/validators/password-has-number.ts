import{AbstractControl, ValidationErrors} from '@angular/forms';


export function passwordHasNumberValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    
  
    if (!password) return null;
  
    const hasNumber = /\d/.test(password);
    return hasNumber ? null : { noNumber: true };
  }
  