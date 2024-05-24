import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }
}
