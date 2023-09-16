/* eslint-disable camelcase */

import { Injectable } from '@angular/core';

import type { ChartData, CreateChartSettings } from 'src/app/models';

import { BrowserOnlyService } from 'src/app/shared/browser-only/browser-only.service';

import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Injectable({
  providedIn: 'root'
})
export class CreateChartService {
  constructor(private browserOnlyService: BrowserOnlyService) {}

  createChart(root: am5.Root, data: ChartData[], settings: CreateChartSettings) {
    this.browserOnlyService.execute(() => {
      if (data) {
        switch (settings.type) {
          case 'pie':
            this.createPieChart(root, data, settings);
            break;
          case 'line':
            this.createLineChart(root, data, settings);
            break;
          case 'column':
            this.createColumnChart(root, data, settings);
            break;
          default:
            throw new Error('UNEXCPECTED ERROR: Incorrect chart type');
        }
      }
    });
  }

  private createPieChart(root: am5.Root, data: ChartData[], settings: CreateChartSettings) {
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(am5percent.PieChart.new(root, {}));

    chart.children.unshift(
      am5.Label.new(root, {
        text: settings.label,
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 0
      })
    );

    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: settings.series.name,
        categoryField: settings.series.categoryField,
        valueField: settings.series.valueField
      })
    );

    series.data.setAll(data);
  }

  private createColumnChart(root: am5.Root, data: ChartData[], settings: CreateChartSettings) {
    /** ===========
     ** Root
    ============ */

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'none',
        wheelY: 'none'
      })
    );

    chart.zoomOutButton.set('forceHidden', true);

    chart.children.unshift(
      am5.Label.new(root, {
        text: settings.label,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: -15,
        paddingBottom: 0
      })
    );

    /** ===========
     ** Y-axis
    ============ */

    const yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 10
    });

    const yTooltip = am5.Tooltip.new(root, { themeTags: ['axis'] });

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: settings.yAxis!.categoryField,
        renderer: yRenderer,
        tooltip: yTooltip
      })
    );

    /** ===========
     ** X-axis
    ============ */

    const xRenderer = am5xy.AxisRendererX.new(root, {
      strokeOpacity: 0.1
    });

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0,
        min: 0,
        extraMax: 0.1,
        renderer: xRenderer
      })
    );

    /** ===========
     ** Series
    ============ */

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: settings.series.name,
        xAxis,
        yAxis,
        valueXField: settings.series.valueField,
        categoryYField: settings.series.categoryField,
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: 'left',
          labelText: '{valueX}'
        })
      })
    );

    series.columns.template.setAll({
      strokeOpacity: 0,
      height: 20
    });

    series.columns.template.adapters.add('fill', (_, target) => {
      return chart.get('colors')!.getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add('stroke', (_, target) => {
      return chart.get('colors')!.getIndex(series.columns.indexOf(target));
    });

    /** ===========
     ** Cursor
    ============ */

    chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'none',
        xAxis,
        yAxis
      })
    );

    /** ===========
     ** Data
    ============ */

    yAxis.data.setAll(data);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);
  }

  private createLineChart(root: am5.Root, data: ChartData[], settings: CreateChartSettings) {
    /** ===========
     ** Root
    ============ */

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX'
      })
    );

    chart.children.unshift(
      am5.Label.new(root, {
        text: settings.label,
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        x: am5.percent(50),
        centerX: am5.percent(50),
        y: -2,
        paddingTop: 0,
        paddingBottom: 0
      })
    );

    /** ===========
     ** X-axis
    ============ */

    const xRenderer = am5xy.AxisRendererX.new(root, {});
    const xTooltip = am5.Tooltip.new(root, {});

    const xAxis = chart.xAxes.push(
      am5xy.GaplessDateAxis.new(root, {
        maxDeviation: 0,
        groupData: false,
        baseInterval: {
          timeUnit: 'day',
          count: 1
        },
        renderer: xRenderer,
        tooltip: xTooltip
      })
    );

    /** ===========
     ** Y-axis
    ============ */

    const yRenderer = am5xy.AxisRendererY.new(root, {});

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.1,
        renderer: yRenderer
      })
    );

    /** ===========
     ** Series
    ============ */

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        xAxis,
        yAxis,
        valueYField: settings.series.valueYField,
        valueXField: settings.series.valueXField,
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: 'horizontal',
          labelText: '{valueY}'
        })
      })
    );

    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get('fill'),
          stroke: root.interfaceColors.get('background'),
          strokeWidth: 2
        })
      });
    });

    const cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        xAxis
      })
    );
    cursor.lineY.set('visible', false);

    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal'
      })
    );

    /** ===========
     ** Data
    ============ */

    series.data.setAll(data);

    series.appear(1000, 100);
    chart.appear(1000, 100);
  }
}
