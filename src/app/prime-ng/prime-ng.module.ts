import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MenubarModule,
    AvatarModule,
    CardModule,
    DividerModule,
    RatingModule,
    DialogModule
  ],
  exports: [
    MenubarModule,
    AvatarModule,
    CardModule,
    DividerModule,
    RatingModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
