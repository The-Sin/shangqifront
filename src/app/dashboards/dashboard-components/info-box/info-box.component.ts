import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements AfterViewInit {
  constructor() { }

  public lineChartData: Array<any> = [
    { data: [12, 19, 3, 5, 2, 3], label: 'Balance $' }
  ];
  public lineChartLabels: Array<any> = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017'
  ];
  public lineChartOptions: any = {
    responsive: true,
    elements: {
      point: {
        radius: 2
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'transparent',
      borderColor: '#bbb790',
      pointBackgroundColor: '#bbb790',
      pointBorderColor: '#bbb790',
      pointHoverBackgroundColor: '#bbb790',
      pointHoverBorderColor: '#bbb790'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  ngAfterViewInit() {
    (<any>$('#ravenue')).sparkline([6, 10, 9, 11, 9, 10, 12], {
      type: 'bar',
      height: '55',
      barWidth: '4',
      width: '100%',
      resize: true,
      barSpacing: '8',
      barColor: '#16baf0'
    });

    const chart = c3.generate({
      bindto: '#foo',
      data: {
        columns: [['data', 91.4]],
        type: 'gauge'
      },
      gauge: {
        label: {
          format: function (value, ratio) {
            return value;
          },
          show: false
        },
        min: 0,
        max: 100,
        units: ' %',
        width: 15
      },
      legend: {
        hide: true
      },
      size: {
        height: 80
      },
      color: {
        pattern: ['#24d2b5']
      }
    });
  }
}
