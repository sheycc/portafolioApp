import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";

import { PrimeNgModule } from "../prime-ng/prime-ng.module";



@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,

    PrimeNgModule
  ]
})
export class SharedModule { }
