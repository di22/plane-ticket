import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Directive({
  selector: '[spaceShip]',

})
export class SpaceShipAnimationDirective implements OnInit{
  checkScroll: Subject<void> = new Subject<void>();
  isScrolling: number = 0;

  constructor(private el: ElementRef) { }
  @HostListener('window:scroll', []) onWindowScroll() {
    this.el.nativeElement.style.animation = "move-up-down .1s linear infinite";
    window.clearTimeout( this.isScrolling);
    this.isScrolling = setTimeout(() => {
      this.checkScroll.next();
    }, 66);
  }

  ngOnInit(): void {
    this.checkScroll.asObservable().subscribe(res => {
      this.el.nativeElement.style.animationPlayState  = "paused";
    });
  }
}
