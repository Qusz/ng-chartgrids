import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';

import { ChartModule } from 'src/app/components/chart/chart.module';
import { ChartsComponent } from './charts.component';

import { ChartsRoutingModule } from './charts-routing.module';

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, RouterModule, ChartModule, CardModule, ChartsRoutingModule],
  exports: [ChartsComponent]
})
export class ChartsModule {}
