import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Döngüler</h1>
  <ul>
    @for(data of todos; track data) {
      <li>
        Index: {{ $index }} ||
        İlk kayıt mı?: {{ $first }} ||
        Son kayıt mı?: {{ $last }} ||
        Yapılacak iş: {{ data.work }} ||
        Tamamlandı mı?: {{ data.isCompleted }}
      </li>
    }
  </ul>
  `
})
export class AppComponent {
  todos: TodoModel[] = [
    {work: "Example 1", isCompleted: false},
    {work: "Example 2", isCompleted: false},
    {work: "Example 3", isCompleted: false}
  ]

  save() {
    for(let i=0; i<10; i++) {}
  }
}

export class TodoModel {
  work: string = ""
  isCompleted: boolean = false
}