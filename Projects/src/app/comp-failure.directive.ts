import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private obj : ElementRef) { }

   @HostListener('mouseenter') onmouseenter()
    {
        this.obj.nativeElement.style.background = 'red';
    }
  
    @HostListener('mouseleave') onmouseleave()
    {
        this.obj.nativeElement.style.background = 'black';
    }
    private changeColor(color: string) {
      this.obj.nativeElement.style.color = color;
    }

}
