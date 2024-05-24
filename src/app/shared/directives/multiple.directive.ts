import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMultiple]',
  standalone: true,
})
export class MultipleDirective {
  @Input('appMultiple') count?: number;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {}

  ngOnInit() {
    this.viewContainer.clear(); // Temizleme, her güncelleme öncesi eski içeriği temizler

    for (let i = 0; i < this.count!; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
