import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import type { CreateChartSettings, ChartData } from 'src/app/models';

import * as am5 from '@amcharts/amcharts5';

import { CreateChartService } from './create-chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class ChartComponent implements AfterViewInit, OnChanges {
  @Input() chartData: ChartData[] | null = null;

  @Input() chartSettings!: CreateChartSettings;

  private root!: am5.Root;

  constructor(private createChartService: CreateChartService) {}

  ngAfterViewInit(): void {
    this.getChartRoot();
  }

  ngOnChanges({ chartData }: SimpleChanges): void {
    if (chartData && !chartData.firstChange && this.chartData) {
      this.createChartService.createChart(this.root, this.chartData, this.chartSettings);
    }
  }

  private getChartRoot() {
    this.root = am5.Root.new(this.chartSettings.chartId);
  }
}
