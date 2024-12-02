import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from "./contact/contact.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  helloWorld: string = "Hello, world from TS"
  pClassname: string = "text-red" // property binding
  merhabaDunya: string = "Merhaba, dunya!"

  clickMe() {
    alert("bana tıkladın")
  }

  changeHelloWorldVariable(event: KeyboardEvent) {
    this.helloWorld = (event.target as HTMLInputElement).value;
  }
}
