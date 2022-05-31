import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

@Directive({
  selector: '[observeVisibility]',
})
export class ObserveVisibilityDirective
  implements OnDestroy, OnInit, AfterViewInit
{
  @Input() threshold: number = 1;
  @Output() visible = new EventEmitter<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();

  constructor(private element: ElementRef) {
    console.log('starting directive');
  }

  ngOnInit() {
    // Create Observer
    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting;
    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (isIntersecting(entry)) {
            this.subject$.next({ entry, observer });
          }
        });
      },
      { rootMargin: '0px', threshold: this.threshold }
    );
  }

  ngAfterViewInit() {
    // Start observing
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);

    this.subject$
      .pipe(delay(300), filter(Boolean))
      .subscribe(async ({ entry, observer }) => {
        const target = entry.target as HTMLElement;
        this.visible.emit(target);
        // observer.unobserve(target);
      });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    this.subject$.next();
    this.subject$.complete();
  }
}
