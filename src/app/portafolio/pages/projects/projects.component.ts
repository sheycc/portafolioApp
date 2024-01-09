import { Component } from '@angular/core';
import {PrimeNgModule} from "../../../prime-ng/prime-ng.module";
import {ProjectDialogComponent} from "../../components/project-dialog/project-dialog.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    PrimeNgModule,
    ProjectDialogComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  visible: boolean = false;

  showDialog() {
    console.log('Dialog should open now!');
    this.visible = true;
  }
}
