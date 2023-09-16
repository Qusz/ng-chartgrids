import type { ChartType } from './chart.type';

export type CreateChartSettings = {
  chartId: string;
  type: ChartType;
  label?: string;
  series: {
    name?: string;
    categoryField?: string;
    valueField?: string;
    valueYField?: string;
    valueXField?: string;
  };
  yAxis?: {
    categoryField: string;
  };
};
