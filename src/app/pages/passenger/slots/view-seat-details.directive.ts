import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[seatDetails]',

})
export class ViewSeatDetailsDirective {
  @Output() toggleCard: EventEmitter<'show' | 'hide'> = new EventEmitter<"show" | "hide">();
  @Input() detailsCard: HTMLDivElement;

  constructor(private elRef: ElementRef) { }
  @HostListener('mouseover')
  onMouseOver() {
    this.toggleCard.emit('show');
    this.detailsCard.style.position = 'absolute';
    this.detailsCard.style.top = `${this.elRef.nativeElement.offsetTop}px`;
    this.detailsCard.style.left = `${this.elRef.nativeElement.offsetLeft - 250}px`;
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.toggleCard.emit('hide');
  }
}
