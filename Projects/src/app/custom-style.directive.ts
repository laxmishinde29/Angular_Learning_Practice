import { Directive , ElementRef , Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj : ElementRef, private renderer: Renderer2) {
    this.setStyles();
   }

   private setStyles(): void {
    this.renderer.setStyle(this.obj.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.obj.nativeElement, 'font-weight', 'bold');
  }
}
