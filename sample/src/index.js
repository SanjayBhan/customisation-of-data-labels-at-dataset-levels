var FusionCharts = require('fusioncharts');
var Charts = require('fusioncharts/fusioncharts.charts');
Charts(FusionCharts);
require('fusioncharts/themes/fusioncharts.theme.fusion')(FusionCharts);
require('../../dist/fusioncharts.extension.customize-data-labels-at-dataset-level.min')(FusionCharts);

FusionCharts.ready(function () {
  new FusionCharts({
    type: 'mscolumn2d',
    id: 'id1',
    renderAt: 'chartContainer',
    width: '800',
    height: '450',
    dataFormat: 'json',
    dataSource: {
      'chart': {
        'caption': 'Business Results 2005 v 2006',
        'xaxisname': 'Month',
        'yaxisname': 'Revenue',
        'theme': 'fusion',
        'showvalues': '1',
        'numberprefix': '$',
        'animation': '1'
      },
      'categories': [
        {
          'category': [
            {
              'label': 'Jan'
            },
            {
              'label': 'Feb'
            },
            {
              'label': 'Mar'
            },
            {
              'label': 'Apr'
            },
            {
              'vline': 'true'
            },
            {
              'label': 'May'
            },
            {
              'label': 'Jun'
            },
            {
              'label': 'Jul'
            },
            {
              'label': 'Aug'
            },
            {
              'label': 'Sep'
            },
            {
              'label': 'Oct'
            },
            {
              'label': 'Nov'
            },
            {
              'label': 'Dec'
            }
          ]
        }
      ],
      'dataset': [
        {
          'seriesname': '2006',
          'valueFontColor': '#29c3be',
          'valueBorderDashed': '1',
          'valueBorderDashLen': '10',
          'valueBorderDashGap': '5',
          'valueBorderPadding': '3',
          'valueBorderRadius': '3',
          'valueBorderThickness': '2',
          'valueBgColor': '#5d62b5',
          'valueBgAlpha': '90',
          'valueBorderColor': '#29c3be',
          'data': [
            {
              'value': '27400'
            },
            {
              'value': '29800'
            },
            {
              'value': '25800'
            },
            {
              'value': '26800'
            },
            {
              'value': '29600'
            },
            {
              'value': '32600'
            },
            {
              'value': '31800'
            },
            {
              'value': '36700'
            },
            {
              'value': '29700'
            },
            {
              'value': '31900'
            },
            {
              'value': '34800'
            },
            {
              'value': '24800'
            }
          ]
        },
        {
          'seriesname': '2005',
          'valueFontColor': '#5d62b5',
          'valueBgAlpha': '80',
          'valueBorderPadding': '3',
          'valueBorderRadius': '3',
          'valueBorderThickness': '2',
          'valueBgColor': '#29c3be',
          'valueBorderColor': '#5d62b5',
          'data': [
            {
              'value': '10000'
            },
            {
              'value': '11500'
            },
            {
              'value': '12500'
            },
            {
              'value': '15000'
            },
            {
              'value': '11000'
            },
            {
              'value': '9800'
            },
            {
              'value': '11800'
            },
            {
              'value': '19700'
            },
            {
              'value': '21700'
            },
            {
              'value': '21900'
            },
            {
              'value': '22900'
            },
            {
              'value': '20800'
            }
          ]
        }
      ],
      'trendlines': [
        {
          'line': [
            {
              'startvalue': '26000',
              'color': '91C728',
              'displayvalue': 'Target',
              'showontop': '1'
            }
          ]
        }
      ]
    }
  }).render();
});
