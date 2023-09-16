/* eslint-disable camelcase */

import { Injectable } from '@angular/core';

import type { CreateChartSettings } from 'src/app/models';

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

  createChart(settings: CreateChartSettings) {
    const { data, type } = settings;

    this.browserOnlyService.execute(() => {
      if (data) {
        switch (type) {
          case 'pie':
            this.createPieChart(settings);
            break;
          case 'line':
            this.createLineChart(settings);
            break;
          case 'column':
            this.createColumnChart(settings);
            break;
          default:
            throw new Error('UNEXCPECTED ERROR: Incorrect chart type');
        }
      }
    });
  }

  private createPieChart(settings: CreateChartSettings) {
    settings.root.setThemes([am5themes_Animated.new(settings.root)]);

    const chart = settings.root.container.children.push(am5percent.PieChart.new(settings.root, {}));

    chart.children.unshift(
      am5.Label.new(settings.root, {
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
      am5percent.PieSeries.new(settings.root, {
        name: settings.series.name,
        categoryField: settings.series.categoryField,
        valueField: settings.series.valueField
      })
    );

    series.data.setAll(settings.data);
  }

  private createColumnChart(settings: CreateChartSettings) {
    /** ===========
     ** Root
    ============ */

    settings.root.setThemes([am5themes_Animated.new(settings.root)]);

    const chart = settings.root.container.children.push(
      am5xy.XYChart.new(settings.root, {
        panX: false,
        panY: false,
        wheelX: 'none',
        wheelY: 'none'
      })
    );

    chart.zoomOutButton.set('forceHidden', true);

    chart.children.unshift(
      am5.Label.new(settings.root, {
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

    const yRenderer = am5xy.AxisRendererY.new(settings.root, {
      minGridDistance: 10
    });

    const yTooltip = am5.Tooltip.new(settings.root, { themeTags: ['axis'] });

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(settings.root, {
        maxDeviation: 0,
        categoryField: settings.yAxis!.categoryField,
        renderer: yRenderer,
        tooltip: yTooltip
      })
    );

    /** ===========
     ** X-axis
    ============ */

    const xRenderer = am5xy.AxisRendererX.new(settings.root, {
      strokeOpacity: 0.1
    });

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(settings.root, {
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
      am5xy.ColumnSeries.new(settings.root, {
        name: settings.series.name,
        xAxis,
        yAxis,
        valueXField: settings.series.valueField,
        categoryYField: settings.series.categoryField,
        tooltip: am5.Tooltip.new(settings.root, {
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
      am5xy.XYCursor.new(settings.root, {
        behavior: 'none',
        xAxis,
        yAxis
      })
    );

    /** ===========
     ** Data
    ============ */

    yAxis.data.setAll(settings.data);
    series.data.setAll(settings.data);

    series.appear(1000);
    chart.appear(1000, 100);
  }

  private createLineChart(settings: CreateChartSettings) {
    /** ===========
     ** Root
    ============ */

    settings.root.setThemes([am5themes_Animated.new(settings.root)]);

    const chart = settings.root.container.children.push(
      am5xy.XYChart.new(settings.root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX'
      })
    );

    chart.children.unshift(
      am5.Label.new(settings.root, {
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

    const xRenderer = am5xy.AxisRendererX.new(settings.root, {});
    const xTooltip = am5.Tooltip.new(settings.root, {});

    const xAxis = chart.xAxes.push(
      am5xy.GaplessDateAxis.new(settings.root, {
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

    const yRenderer = am5xy.AxisRendererY.new(settings.root, {});

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(settings.root, {
        maxDeviation: 0.1,
        renderer: yRenderer
      })
    );

    /** ===========
     ** Series
    ============ */

    const series = chart.series.push(
      am5xy.LineSeries.new(settings.root, {
        minBulletDistance: 10,
        xAxis,
        yAxis,
        valueYField: settings.series.valueYField,
        valueXField: settings.series.valueXField,
        tooltip: am5.Tooltip.new(settings.root, {
          pointerOrientation: 'horizontal',
          labelText: '{valueY}'
        })
      })
    );

    series.bullets.push(() => {
      return am5.Bullet.new(settings.root, {
        sprite: am5.Circle.new(settings.root, {
          radius: 5,
          fill: series.get('fill'),
          stroke: settings.root.interfaceColors.get('background'),
          strokeWidth: 2
        })
      });
    });

    const cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(settings.root, {
        xAxis
      })
    );
    cursor.lineY.set('visible', false);

    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(settings.root, {
        orientation: 'horizontal'
      })
    );

    /** ===========
     ** Data
    ============ */

    series.data.setAll(settings.data);

    series.appear(1000, 100);
    chart.appear(1000, 100);
  }
}
