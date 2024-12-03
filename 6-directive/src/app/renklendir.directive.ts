import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRenklendir]',
  standalone: true
})
export class RenklendirDirective {

  @Input("appRenklendir")
  color: string = "";

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter")
  method1() {
    this.el.nativeElement.style = "color: red;"
    console.log("Fare imleci elementin üzerine geldi")
  }

  @HostListener("mouseleave")
  method2() {
    this.el.nativeElement.style = "color: black;"
    console.log("Fare imleci elementin üzerinden ayrıldı")
  }

}
