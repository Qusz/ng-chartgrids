import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: '/charts',
    pathMatch: 'full'
  },
  {
    path: 'charts',
    loadComponent: () => import('./pages/charts/charts.component').then((m) => m.ChartsComponent)
  },
  {
    path: 'grids',
    loadComponent: () => import('./pages/grids/grids.component').then((m) => m.GridsComponent)
  },
  {
    path: '**',
    redirectTo: '/charts'
  }
];
