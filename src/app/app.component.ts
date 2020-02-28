import { Component } from '@angular/core';
import { CarouselConfig } from './carousel/carousel-container/carousel-container.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carousel';

  config: CarouselConfig = {
    grid: { xs: 0, sm: 0, md: 0, lg: 0, all: 300 }
  };
}
