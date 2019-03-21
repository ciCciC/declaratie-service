import { AbstractControl } from '@angular/forms';

export function numberInputValidator(control: AbstractControl): { [key: string]: any } | null {

  const point = /[.]/;
  const comma = /[,]/;

  const stringValue = ('' + control.value);

  if (point.test(stringValue)) {
    const arr = stringValue.split('.');
    const ch = arr[1];

    if (ch.length > 2) {
      const aa = ch.substring(0, 2);
      control.setValue(Number(arr[0] + '.' + aa));
    }
  }

  if (comma.test(stringValue)) {
    const arr = stringValue.split(',');
    const ch = arr[1];

    if (ch.length > 2) {
      const aa = ch[0] + ch[1];
      control.setValue(Number(arr[0] + '.' + aa));
    }
  }

  console.log('After: ' + stringValue);

  return null;
}
