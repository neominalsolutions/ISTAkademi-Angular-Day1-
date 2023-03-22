import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextBold]', // bu isim ile kullanılacak
})
export class TextBoldDirective {
  // ElementRef html elementin referansını yakalayıp ona özellikler kazandırmamız sağlar yani artık JS api ile style class vs verebiliriz.

  constructor(private el: ElementRef) {
    // eğer p elementi ise nativeElement p elementin js instance verir.
    // ElementRef service js deki karşılığı documentElementById('div')

    const element = this.el.nativeElement as HTMLElement;

    element.style.fontWeight = 'bold';
    element.className = 'active';
    element.style.padding = '5px';
  }

  // HostListener ile JS addEventListener Api bağlanırız.
  // element.addEventListener('mouseover', () => {
  //   const element = this.el.nativeElement as HTMLElement;
  //   element.style.fontSize = '24px';
  //   element.style.cursor = 'pointer';
  // })
  @HostListener('mouseover')
  OnMouseOver() {
    const element = this.el.nativeElement as HTMLElement;
    element.style.fontSize = '24px';
    element.style.cursor = 'pointer';
  }

  @HostListener('mouseout')
  OnMouseOut() {
    const element = this.el.nativeElement as HTMLElement;
    element.style.fontSize = '12px';
  }
}
