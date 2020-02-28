import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChild,
  ContentChildren,
  ElementRef,
  Inject,
  IterableDiffers,
  OnChanges,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  SimpleChanges,
  QueryList,
  Renderer2,
  ViewChild,
  Input,
  Output
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';

import { CarouselPrevDirective, CarouselNextDirective, CarouselItemDirective } from './carousel-container.directive';
import { CarouselConfig, CarouselStore } from './carousel-container.interface';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges, OnDestroy {

  private store: CarouselStore = {
    touch: { active: false, swipe: '', velocity: 0 },
    vertical: { enabled: false, height: 0 },
    interval: null,
    transform: { xs: 0, sm: 0, md: 0, lg: 0, all: 0 },
    visibleItems: { start: 0, end: 0 },
    deviceType: 'lg',
    type: 'fixed',
    token: '',
    items: 0,
    load: 0,
    deviceWidth: 0,
    carouselWidth: 0,
    itemWidth: 0,
    slideItems: 0,
    itemWidthPer: 0,
    itemLength: 0,
    currentSlide: 0,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
    speed: 200,
    loop: false,
    dexVal: 0,
    touchTransform: 0,
    isEnd: false,
    isFirst: true,
    isLast: false,
    RTL: false,
    point: true,
    velocity: 1
  };

  itemListSupscription: Subscription;

  prevButtonListener: () => void;
  nextButtonListener: () => void;
  resizeListener: () => void;
  scrollListener: () => void;

  private carousel: HTMLElement;
  private directionSymbol: string;
  private onResize: any;

  @Input() set config(options: CarouselConfig) {
    console.log(options);
    this.store.type = options.grid.all !== 0 ? 'fixed' : 'responsive';
    this.store.loop = options.loop || false;
    this.store.easing = options.easing || this.store.easing;
    this.store.touch.active = options.touch || false;
    this.store.RTL = options.RTL || false;
    this.store.interval = options.interval || null;
    this.store.velocity = options.velocity >= 0 ? options.velocity : this.store.velocity;
    this.store.vertical.enabled = options.vertical && options.vertical.enabled;
    this.store.vertical.height = options.vertical && options.vertical.height;
    this.store.point = options.point ? options.point.visible : true;

    this.directionSymbol = this.store.RTL ? '' : '-';
  }
  @Output() private carouselLoad = new EventEmitter();
  @Output() private carouselMove = new EventEmitter();

  @ContentChild(CarouselPrevDirective, { read: ElementRef, static: true })
  set prevButton(buttonElement: ElementRef) {
    if (this.prevButtonListener) {
      this.prevButtonListener();
    }

    if (buttonElement) {
      this.prevButtonListener = this.renderer.listen(buttonElement.nativeElement, 'click', () => {
        console.log('prev click');
      });
    }
  }

  @ContentChild(CarouselNextDirective, { read: ElementRef, static: true })
  set nextButton(buttonElement: ElementRef) {
    if (this.nextButtonListener) {
      this.nextButtonListener();
    }

    if (buttonElement) {
      this.nextButtonListener = this.renderer.listen(buttonElement.nativeElement, 'click', () => {
        console.log('next click');
      });
    }
  }

  @ContentChildren(CarouselItemDirective) private itemList: QueryList<CarouselItemDirective>;

  @ViewChild('carouselItems', { read: ElementRef, static: true }) private carouselItems: ElementRef;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private differs: IterableDiffers,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.store);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.carousel = this.elementRef.nativeElement;

    if (isPlatformBrowser(this.platformId)) {
      this.resizeListener = this.renderer.listen('window', 'resize', event => {
        clearTimeout(this.onResize);

        this.onResize = setTimeout(() => {

        }, 500);
      });
    }
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');

    this.itemListSupscription = this.itemList.changes.subscribe(value => {
      console.log(value);
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnDestroy() {
    if (this.itemListSupscription) {
      this.itemListSupscription.unsubscribe();
    }
  }
}
