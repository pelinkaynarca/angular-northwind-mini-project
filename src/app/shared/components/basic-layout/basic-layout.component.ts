import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WelcomeDirective } from '../../directives/welcome.directive';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [RouterLink, WelcomeDirective],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css',
})
export class BasicLayoutComponent {}
