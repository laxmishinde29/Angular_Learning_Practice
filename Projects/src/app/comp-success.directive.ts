import { Directive ,HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

  constructor(private obj : ElementRef) 
  {}

  @HostListener('mouseenter') onmouseenter()
  {
      this.obj.nativeElement.style.background = 'blue';
  }

  @HostListener('mouseleave') onmouseleave()
  {
      this.obj.nativeElement.style.background = 'black';
  }
   
  private changeColor(color: string) {
    this.obj.nativeElement.style.color = color;
  }
}
