import {AfterViewInit, Component, inject, NgZone, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  visible: boolean = false;

  constructor(private zone: NgZone) {
    inject(NgZone).runOutsideAngular(() => {
      setTimeout(() => {this.zone.run(() => {
        this.visible = true;
      });}, 4000);
    })
  }

}
