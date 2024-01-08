import { Routes } from '@angular/router';
import {HomeComponent} from "./portafolio/pages/home/home.component";

export const routes: Routes = [
  {
    path: 'portafolio',
    loadChildren: () => import('./portafolio/portafolio.module').then( m => m.PortafolioModule),
  },
  {
    path: '**',
    redirectTo: 'portafolio'
  }
];
