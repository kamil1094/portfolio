import { Directive, ElementRef, HostListener } from '@angular/core';
import { WindowRef } from './window.service';


@Directive({
  selector: '[appSticky]'
})
export class StickyDirective {
  constructor(private element: ElementRef,private window: WindowRef){}

  @HostListener('window:scroll', ['$event'])
  handleScrollEvent(e){
    if(this.window.nativeWindow.pageYOffset > 120)
      {
        this.element.nativeElement.classList.add('sticky');
      } else {
        this.element.nativeElement.classList.remove('sticky');
      }
  }

}
