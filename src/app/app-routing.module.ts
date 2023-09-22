import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/charts',
    pathMatch: 'full'
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then((m) => m.ChartsModule)
  },
  {
    path: 'grids',
    loadChildren: () => import('./pages/grids/grids.module').then((m) => m.GridsModule)
  },
  {
    path: '**',
    redirectTo: '/charts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
