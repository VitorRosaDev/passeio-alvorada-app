import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValeConferirPageRoutingModule } from './vale-conferir-routing.module';

import { ValeConferirPage } from './vale-conferir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValeConferirPageRoutingModule
  ],
  declarations: [ValeConferirPage]
})
export class ValeConferirPageModule {}
