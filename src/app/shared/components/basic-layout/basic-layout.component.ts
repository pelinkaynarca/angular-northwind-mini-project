import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WelcomeDirective } from '../../directives/welcome.directive';
import { MultipleDirective } from '../../directives/multiple.directive';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [RouterLink, WelcomeDirective, MultipleDirective],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css',
})
export class BasicLayoutComponent {}
