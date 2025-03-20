import {AbstractControl, ValidatorFn} from '@angular/forms';

export function verifieMontant(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    if (control.value %5 != 0){
      return  {'ifmotant': true};
    }
    return null;
   };
}
