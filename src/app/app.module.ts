import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel-container/carousel-container.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { CarouselTileComponent } from './carousel/carousel-tile/carousel-tile.component';
import {
  CarouselDefDirective,
  CarouselItemDirective,
  CarouselNextDirective,
  CarouselOutletDirective,
  CarouselPointDirective,
  CarouselPrevDirective
} from './carousel/carousel-container/carousel-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemComponent,
    CarouselTileComponent,
    CarouselDefDirective,
    CarouselItemDirective,
    CarouselNextDirective,
    CarouselOutletDirective,
    CarouselPointDirective,
    CarouselPrevDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
