import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MessagesModule } from 'primeng/messages';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MenubarModule,
    AvatarModule,
    CardModule,
    DividerModule,
    RatingModule,
    DialogModule,
    GalleriaModule,
    CarouselModule,
    ChipModule,
    ButtonModule,
    ToggleButtonModule,
    MessagesModule,
    FieldsetModule
  ],
  exports: [
    MenubarModule,
    AvatarModule,
    CardModule,
    DividerModule,
    RatingModule,
    DialogModule,
    GalleriaModule,
    CarouselModule,
    ChipModule,
    ButtonModule,
    ToggleButtonModule,
    MessagesModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
