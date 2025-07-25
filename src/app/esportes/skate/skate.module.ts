import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkatePageRoutingModule } from './skate-routing.module';

import { SkatePage } from './skate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkatePageRoutingModule
  ],
  declarations: [SkatePage]
})
export class SkatePageModule {}
