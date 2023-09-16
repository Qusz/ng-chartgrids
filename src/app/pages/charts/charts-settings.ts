import { ChartsModels } from 'src/app/models';

export const allChartsSettings: ChartsModels = {
  genders: {
    chartId: 'genders-chart',
    type: 'pie',
    label: 'Genders',
    series: {
      categoryField: 'gender',
      valueField: 'count'
    }
  },
  pointsOfRegistrtion: {
    chartId: 'points-of-reg-chart',
    type: 'column',
    label: 'Registrations',
    yAxis: {
      categoryField: 'point'
    },
    series: {
      categoryField: 'point',
      valueField: 'count'
    }
  },
  datesOfRegistration: {
    chartId: 'dates-of-reg-chart',
    type: 'line',
    label: 'Date',
    series: {
      valueXField: 'date',
      valueYField: 'count'
    }
  }
};
