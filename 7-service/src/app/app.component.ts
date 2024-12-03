import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponent],
  template: `<app-a></app-a>`
})
export class AppComponent {
  title = '7-service';
}
