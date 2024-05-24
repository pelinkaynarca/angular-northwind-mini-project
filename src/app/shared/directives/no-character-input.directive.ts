import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true
})
export class NoCharacterInputDirective {

  constructor() { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = event.target.value;
    event.target.value = initialValue.replace(/[^a-zA-Z0–9 -]/g, '');
    if (initialValue !== event.target.value) {
      event.stopPropagation();
    }
  }
}
