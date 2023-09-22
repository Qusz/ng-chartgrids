import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridsComponent } from './grids.component';

const routes: Routes = [
  {
    path: '',
    component: GridsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridsRoutingModule {}
