
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  styleUrl: 'about.component.css',
  templateUrl: 'about.component.html',
  imports: [],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}