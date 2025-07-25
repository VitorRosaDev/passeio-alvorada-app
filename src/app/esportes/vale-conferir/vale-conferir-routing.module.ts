import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValeConferirPage } from './vale-conferir.page';

const routes: Routes = [
  {
    path: '',
    component: ValeConferirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValeConferirPageRoutingModule {}
