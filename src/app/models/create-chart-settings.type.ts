import * as am5 from '@amcharts/amcharts5';

import type { ChartType } from './chart.type';

export type CreateChartSettings = {
  type: ChartType;
  data: unknown[];
  root: am5.Root;
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
