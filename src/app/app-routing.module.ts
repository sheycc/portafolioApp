import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortafolioModule} from "./portafolio/portafolio.module";

const routes: Routes = [
  {
    path: 'portafolio',
    loadChildren: () => import('./portafolio/portafolio.module').then( m => m.PortafolioModule)
  },
  {
    path: '**',
    redirectTo: 'portafolio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
