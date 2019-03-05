import { AbstractControl } from '@angular/forms';

export function textInputValidator(control: AbstractControl): { [key: string]: any } | null {
  const valid = /(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script/.test(control.value);
  return !valid ? null : { lets_be_friends: { valid: false, value: control.value } };
}
