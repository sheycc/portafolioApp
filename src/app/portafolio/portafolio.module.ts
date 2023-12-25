import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PrimeNgModule } from "../prime-ng/prime-ng.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,

    PrimeNgModule
  ]
})
export class PortafolioModule { }
