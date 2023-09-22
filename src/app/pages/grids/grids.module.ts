import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GridModule } from '../../components/grid/grid.module';
import { GridsComponent } from './grids.component';
import { GridsRoutingModule } from './grids-routing.module';

@NgModule({
  declarations: [GridsComponent],
  imports: [CommonModule, RouterModule, GridModule, GridsRoutingModule],
  exports: [GridsComponent]
})
export class GridsModule {}
