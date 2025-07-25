import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'futebol',
    loadChildren: () => import('./esportes/futebol/futebol.module').then( m => m.FutebolPageModule)
  },
  {
    path: 'skate',
    loadChildren: () => import('./esportes/skate/skate.module').then( m => m.SkatePageModule)
  },
  {
    path: 'vale-conferir',
    loadChildren: () => import('./esportes/vale-conferir/vale-conferir.module').then( m => m.ValeConferirPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
