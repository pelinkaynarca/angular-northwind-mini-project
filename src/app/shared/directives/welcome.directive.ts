import { isPlatformBrowser } from '@angular/common';
import {
  Directive,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true,
})
export class WelcomeDirective implements OnInit {
  @Input('appWelcome') delay?: number;

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const welcomeMessage = document.createElement('div');
      welcomeMessage.innerHTML = 'Welcome';
      welcomeMessage.style.position = 'absolute';
      welcomeMessage.style.top = '50%';
      welcomeMessage.style.left = '50%';
      welcomeMessage.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(welcomeMessage);

      setTimeout(() => {
        welcomeMessage.style.display = 'none';
        const element = this.viewContainer.createEmbeddedView(this.templateRef);
      }, this.delay);
    }
  }
}
