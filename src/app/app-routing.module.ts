import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { GridsComponent } from './pages/grids/grids.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/charts',
    pathMatch: 'full'
  },
  {
    path: 'charts',
    component: ChartsComponent
  },
  {
    path: 'grids',
    component: GridsComponent
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
