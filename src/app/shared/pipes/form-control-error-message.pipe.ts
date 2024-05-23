import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage',
  standalone: true
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(value: ValidationErrors | null, ...args: unknown[]): string {
    if (value) {
      if (value['required']) {
        return "Required field";
      }
      else if(value['minlength']){
        return "Must be min " + value['minlength'].requiredLength + " chars";
      }
      else if(value['min']){
        return "Must be min " + value['min'].min;
      }
      else{
        console.log(value);
      }
    }
    return "";
  }

}
