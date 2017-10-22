import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlighter]'
})
export class MyHighlighterDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: any) {
    const text = event.target.innerText;
    switch (text) {
      case '1':
        this.highlight('Red');
        break;
      case '2':
        this.highlight('Red');
        break;
      case '3':
        this.highlight('Yellow');
        break;
        case '4':
        this.highlight('Yellow');
        break;
        case '5':
        this.highlight('Green');
        break;
      default:
        this.highlight(null);
        break;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
