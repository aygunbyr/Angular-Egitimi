import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Şart Blokları</h1>

  @if(showFirstText) {
    <p style="color: red;">Birinci yazı</p>
  }

  @if(showSecondText) {
    <p style="color: green;">İkinci yazı</p>
  }

  <hr>
  <button (click)="show(1)">Birinci yazıyı göster</button>
  <button (click)="show(2)">İkinci yazıyı göster</button>
  `,
})
export class AppComponent {
  showFirstText: boolean = false;
  showSecondText: boolean = false;

  show(num: number) {
    if(num == 1) {
      this.showFirstText = true;
      this.showSecondText = false;
    } else {
      this.showFirstText = false;
      this.showSecondText = true;
    }
  }
}
