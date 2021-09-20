import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel-component',
  templateUrl: './carousel-basic.html',
})
export class NgbdCarouselBasic {
  @Input() images: string[];
  @Input() text: string;
  // images =
}
