import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCarouselItem]'
})
export class CarouselItemDirective { }

@Directive({
  selector: '[appCarouselNext]'
})
export class CarouselNextDirective { }

@Directive({
  selector: '[appCarouselPrev]'
})
export class CarouselPrevDirective { }

@Directive({
  selector: '[appCarouselPoint]'
})
export class CarouselPointDirective { }

@Directive({
  selector: '[appCarouselDef]'
})
export class CarouselDefDirective {
  when: (index: number, nodeData: any) => boolean;

  constructor(public template: TemplateRef<any>) { }
}

@Directive({
  selector: '[appCarouselOutlet]'
})
export class CarouselOutletDirective {
  constructor(public viewContainer: ViewContainerRef) { }
}
