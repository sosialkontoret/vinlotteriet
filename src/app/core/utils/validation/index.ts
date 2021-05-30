import { FormControl } from '@angular/forms';

export class ValidationUtils {
  public static emailValidator(control: FormControl) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { incorrectMailFormat: true };
    }
    return null;
  }

  public static dateTimeValidation(control: FormControl) {
    if (control.value !== '' && !control.value) {
      return { incorrectDateTime: true };
    }
    const validDate = new Date(control.value);
    if (Number.isNaN(validDate.getTime())) {
      return { incorrectDateTime: true };
    }
    return null;
  }

  public static validDrawNumber(control: FormControl) {
    if (control.value !== '' && Number.isNaN(control.value)) {
      return { notValidNumber: true };
    }
    const value = +control.value;
    if (value < 1 || value > 100) {
      return { notValidNumber: true };
    }
    return null;
  }
}
