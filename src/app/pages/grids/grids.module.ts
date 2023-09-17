import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '../../components/grid/grid.module';
import { GridsComponent } from './grids.component';

@NgModule({
  declarations: [GridsComponent],
  imports: [CommonModule, GridModule],
  exports: [GridsComponent]
})
export class GridsModule {}
