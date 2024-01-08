import {Component, NgModule} from '@angular/core';
import { PrimeNgModule } from "../../../prime-ng/prime-ng.module";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PrimeNgModule,
    FormsModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  values: number[] = [5, 5, 3, 3, 4, 4, 4, 4, 4, 4, 5];

}
