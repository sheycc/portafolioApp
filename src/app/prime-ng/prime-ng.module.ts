import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MenubarModule,
    AvatarModule,
    CardModule,
    DividerModule,
    RatingModule
  ],
  exports: [
    MenubarModule,
    AvatarModule,
    CardModule,
    DividerModule,
    RatingModule
  ]
})
export class PrimeNgModule { }
