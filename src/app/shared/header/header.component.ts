import {Component, OnInit} from '@angular/core';

import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from "../../prime-ng/prime-ng.module";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    PrimeNgModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'About',
        icon: 'pi pi-fw pi-user',
        routerLink: './portafolio/about'
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-file',
        routerLink: './portafolio/projects'
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-id-card',
        routerLink: './portafolio/contact'
      }
    ]
  }
}
