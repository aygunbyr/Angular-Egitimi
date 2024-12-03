import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
  constructor(
    public ex: ExampleService
  ) {}
}
