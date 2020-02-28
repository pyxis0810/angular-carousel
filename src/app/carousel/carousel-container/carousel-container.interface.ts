export type DeviceType = 'xs' | 'sm' | 'md' | 'lg' | 'all';
export type ButtonVisible = 'disabled' | 'hide';
export type Custom = 'banner';
export type Animate = 'lazy';

export interface Point {
  visible: boolean;
  hideOnSingleSlide?: boolean;
}

export interface Animation {
  type?: Animate;
  animateStyles?: AnimationStyles;
}

export interface AnimationStyles {
  style?: string;
  open?: string;
  close?: string;
  stagger?: number;
}

export interface CarouselInterval {
  timing: number;
  initialDelay?: number;
}

export class Touch {
  active?: boolean;
  swipe: string;
  velocity: number;
}

export class Vertical {
  enabled: boolean;
  height: number;
  // numHeight?: number;
}

export class Transfrom {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  all: number;
}

export class CarouselButton {
  visibility?: ButtonVisible;
  elastic?: number;
}

export class ItemsControl {
  start: number;
  end: number;
}

export class CarouselStore {
  touch: Touch;
  vertical: Vertical;
  interval?: CarouselInterval;
  transform: Transfrom;
  button?: CarouselButton;
  visibleItems?: ItemsControl;
  deviceType?: DeviceType;
  type: string;
  token: string;
  items: number;
  load: number;
  deviceWidth: number;
  carouselWidth: number;
  itemWidth: number;
  slideItems: number;
  itemWidthPer: number;
  itemLength: number;
  currentSlide: number;
  easing: string;
  speed: number;
  loop: boolean;
  dexVal: number;
  touchTransform: number;
  isEnd: boolean;
  isFirst: boolean;
  isLast: boolean;
  RTL: boolean;
  point: boolean;
  velocity: number;
}

export class CarouselConfig {
  grid: Transfrom;
  slide?: number;
  speed?: number;
  interval?: CarouselInterval;
  animation?: Animate;
  point?: Point;
  type?: string;
  load?: number;
  custom?: Custom;
  loop?: boolean;
  touch?: boolean;
  easing?: string;
  RTL?: boolean;
  button?: CarouselButton;
  vertical?: Vertical;
  velocity?: number;
}

export class CarouselOutletContext<T> {
  /** Data for the node. */
  $implicit: T;

  /** Depth of the node. */
  level: number;

  /** Index location of the node. */
  index?: number;

  /** Length of the number of total dataNodes. */
  count?: number;

  constructor(data: T) {
    this.$implicit = data;
  }
}
