import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { ChartModule } from 'src/app/components/chart/chart.module';
import { ChartsComponent } from './charts.component';

@NgModule({
  declarations: [ChartsComponent],
  imports: [CommonModule, ChartModule, CardModule],
  exports: [ChartsComponent]
})
export class ChartsModule {}
