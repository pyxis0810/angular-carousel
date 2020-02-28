import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-carousel-tile',
  templateUrl: './carousel-tile.component.html',
  styleUrls: ['./carousel-tile.component.scss']
})
export class CarouselTileComponent {
  @HostBinding('class.item') classes = true;
}
