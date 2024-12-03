Kurs Udemy Linki

[Angular: Başlangıçtan Uzmanlığa (2024)](https://www.udemy.com/course/sfrdan-ileri-seviye-angular-egitimi/)

Angular dökümantasyonu

[Angular](https://angular.dev/)

Angular CLI global olarak yüklemek

```tsx
npm install -g @angular/cli@18.2.12
```

Powershell için gerekli olan izinleri vermek

```tsx
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Angular versiyonunu kontrol etmek

```tsx
ng version
```

Yeni bir proje oluşturmak

```tsx
ng new my-first-app
```

Uygulamayı ayağa kaldırmak

```tsx
ng serve
```

Component oluşturma snippet:

```tsx
a - component;
```

Component oluşturma CLI komutu (terminalde src/app dizininde iken yazın)

```tsx
ng generate component home
```

Two way data binding için FormsModule’ü import etmek gerekiyor.

### Routing

app.routes.ts

```tsx
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
```

app.component.ts

```tsx
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <ul>
        <li>
          <a routerLink="/home">Home Page</a>
        </li>
        <li>
          <a routerLink="/about">About Page</a>
        </li>
        <li>
          <a routerLink="/contact">Contact Page</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
```

### Fonksiyon ile Routing

home.component.html

```tsx
<p>home works!</p>
<button (click)="method()">Go to about</button>
```

home.component.ts

```tsx
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  method() {
    // this.router.navigate(["about"])
    this.router.navigateByUrl('/about');
  }
}
```

### Routing’de Parametre Gönderme

app.routes.ts içindeki route’lardan bir tanesi

```tsx
{
  path: "contact/:params",
  component: ContactComponent
}
```

contact.component.ts

```tsx
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private activated: ActivatedRoute) {
    this.activated.params.subscribe((res) => {
      console.log(res['params']);
    });
  }
}
```

### Layout Yapısı Oluşturma

app.routes.ts

```tsx
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'contact/:params',
        component: ContactComponent,
      },
    ],
  },
];
```

layouts.component.html

```tsx
<nav>
  <ul>
    <li>
      <a routerLink="/home">Home Page</a>
    </li>
    <li>
      <a routerLink="/about">About Page</a>
    </li>
    <li>
      <a routerLink="/contact">Contact Page</a>
    </li>
    <li>
      <a routerLink="/login">Login Page</a>
    </li>
  </ul>
</nav>

<router-outlet></router-outlet>

<h1>footer</h1>
```

layouts.component.ts

```tsx
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css',
})
export class LayoutsComponent {}
```

### Directive

CLI komutu ile directive oluşturma

```tsx
ng generate directive renklendir
```

Directive’in kullanılacağı Component’te directive import edilmelidir

```tsx
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RenklendirDirective } from './renklendir.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RenklendirDirective],
  template: ` <h1 appRenklendir>Directive</h1> `,
})
export class AppComponent {}
```

Directive’e input değeri de verebilirsiniz

```tsx
<h1 appRenklendir="green">Directive</h1>
```

Örnek: Renklendir Directive

```tsx
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRenklendir]',
  standalone: true,
})
export class RenklendirDirective {
  @Input('appRenklendir')
  color: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  method1() {
    this.el.nativeElement.style = 'color: red;';
    console.log('Fare imleci elementin üzerine geldi');
  }

  @HostListener('mouseleave')
  method2() {
    this.el.nativeElement.style = 'color: black;';
    console.log('Fare imleci elementin üzerinden ayrıldı');
  }
}
```

Örnek: Validate Directive

validate.directive.ts

```tsx
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidate]',
  standalone: true,
})
export class ValidateDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keyup')
  keyUp() {
    this.checkInputValidation(this.el.nativeElement);
  }

  checkInputValidation(element: any) {
    const valid = element.validity.valid;
    const id = element.id;
    const divEl = document.querySelector(`#${id} + div`);
    if (!valid) {
      element.className = 'invalid';
      divEl!.innerHTML = element.validationMessage;
    } else {
      element.className = '';
      divEl!.innerHTML = '';
    }
  }
}
```

app.component.ts

```tsx
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RenklendirDirective } from './renklendir.directive';
import { ValidateDirective } from './validate.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ValidateDirective],
  template: `
    <h1>Directive</h1>
    <form>
      <input
        id="name"
        autocomplete="off"
        appValidate
        type="text"
        required
        minlength="3"
      />
      <div></div>
      <button type="submit">Send</button>
    </form>
  `,
})
export class AppComponent {}
```

### Services

src/app klasörünün altında bir services klasörü oluşturalım

```tsx
mkdir services
```

Daha sonra bu dizine geçelim

```tsx
cd services
```

Angular CLI kullanarak servis oluşturma

```tsx
ng generate service example
```

example.service.ts

```tsx
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  work: string = '';
  todos: string[] = [];

  constructor() {}

  save() {
    this.todos.push(this.work);
    this.work = '';
  }
}
```

a.component.ts

```tsx
import { Component } from '@angular/core';
import { BComponent } from '../b/b.component';
import { FormsModule } from '@angular/forms';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [BComponent, FormsModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
})
export class AComponent {
  constructor(public ex: ExampleService) {}
}
```

a.component.html

```tsx
<h1>Service Örneği</h1>
<div>
  <input [(ngModel)]="ex.work">
  <button (click)="ex.save()">Save</button>
</div>
<div>
  <app-b></app-b>
</div>
```

b.component.ts

```tsx
import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css',
})
export class BComponent {
  constructor(public ex: ExampleService) {}
}
```

b.component.html

```tsx
<ul>@for(t of ex.todos; track t) {<li>{{ t }}</li>}</ul>
```

### Pipe

Pipe’lar dönüştürme işlemi yapan fonksiyonel yapılardır.

- **Şablonlarda (HTML) veriyi dönüştürmek** için kullanılır.
- **Veri formatını değiştirmek** gibi işlemleri kolaylaştırır.
- **Kendi özel pipe’lerinizi** yazarak, projeye özel ihtiyaçlarınızı karşılayabilirsiniz.

### Angular’ın Builtin Pipe’ları ve Pipe Örnekleri

[Angular](https://angular.dev/guide/templates/pipes)

Pipe oluşturmak (terminalde src/app dizininde iken)

```tsx
ng generate pipe todo
```

### TodoPipe Örneği

app.component.ts

```tsx
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodoPipe } from './todo.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, TodoPipe],
  template: `
    <h1>Pipe</h1>
    <div>
      <input [(ngModel)]="work" />
      <button (click)="save()">Save</button>
    </div>
    <div>
      <input
        type="search"
        [(ngModel)]="search"
        placeholder="Search something..."
      />
      <ul>
        @for(t of todos | todo:search; track t) {
        <li>{{ t }}</li>
        }
      </ul>
    </div>
  `,
})
export class AppComponent {
  work: string = '';
  todos: string[] = ['Domates', 'Armut', 'Elma'];
  search: string = '';
  save() {}
}
```

todo.pipe.ts

```tsx
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo',
  standalone: true,
})
export class TodoPipe implements PipeTransform {
  transform(value: string[], search: string): string[] {
    if (!search) return value;
    return value.filter((p) => p.includes(search));
  }
}
```

ChatGPT bunun yanlış bir örnek olduğunu söyledi.

Evet, bu kodda kullanılan **Angular Pipe** örneği teknik olarak doğru ve çalışır, ancak filtreleme işlemleri için pipe kullanımı **best practice** (en iyi uygulama) olarak **tavsiye edilmez**. Bunun nedenleri şunlardır:

### 1. **Performans Sorunları**

Pipelar, Angular bileşenleri her değiştiğinde otomatik olarak yeniden çalıştırılır. Filtreleme gibi işlemler, özellikle büyük listelerde kullanıldığında performans sorunlarına neden olabilir. Angular, bu tür **yan etkili işlemleri** bileşenlerde veya servislerde yapmayı önerir.

### 2. **Stateless Olmalı**

Angular Pipe’lar stateless (durumsuz) işlemler için tasarlanmıştır. Yani girdiyi alıp çıktıyı dönüştürmelidir. Filtreleme gibi işlemler, giriş verisine bağlı olduğu için "durum bağımlı" hale gelir ve karmaşıklık artar

### Filtreleme Best Practice Yöntem

html

```tsx
<input type="search" [(ngModel)]="search" placeholder="Search something..." (ngModelChange)="filterTodos()">
<ul>
  <li *ngFor="let t of filteredTodos">{{ t }}</li>
</ul>

```

typescript

```tsx
export class AppComponent {
  work: string = '';
  todos: string[] = ['Domates', 'Armut', 'Elma'];
  search: string = '';
  filteredTodos: string[] = [...this.todos];

  save() {
    if (this.work.trim()) {
      this.todos.push(this.work.trim());
      this.filterTodos(); // Yeni todo'yu filtrele
      this.work = '';
    }
  }

  filterTodos() {
    this.filteredTodos = this.todos.filter((t) =>
      t.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
```

Name Pipe örneği

```tsx
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name',
  standalone: true,
})
export class NamePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return `Mr. ${value}`;
  }
}
```
