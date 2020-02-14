import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills-chart',
  templateUrl: './skills-chart.component.html',
  styleUrls: ['./skills-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsChartComponent {
  get data(): any[] {
    return [
      {
        data: [90, 90, 90, 85, 85, 70, 70, 60, 50],
        backgroundColor: [
          'rgba(203, 209, 142, 0.5)',
          'rgba(203, 209, 142, 0.5)',
          'rgba(203, 209, 142, 0.5)',
          'rgba(203, 209, 142, 0.5)',
          'rgba(203, 209, 142, 0.5)',
          'rgba(203, 209, 142, 0.5)',
          'rgba(203, 209, 142, 0.5)',
          'rgba(203, 209, 142, 0.5)',
          'rgba(203, 209, 142, 0.5)',
        ],
        borderWidth: 1,
        borderColor: [
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
        ],
        hoverBackgroundColor: [
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
        ],
        hoverBorderColor: [
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
          'rgba(203, 209, 142, 1)',
        ],
      }
    ];
  }

  get labels(): string[] {
    return ['Angular', 'NgRx', 'HTML', 'SASS', 'CSS', 'Openlayers', 'Mapbox', 'Vuejs', 'React'];
  }

  get options(): any {
    return {
      responsive: true,
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            min: 0,
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#302118',
            fontFamily: 'Roboto',
            fontSize: 16,
          },
          gridLines: {
            display: false,
          },
        }]
      },
      scaleShowVerticalLines: false,
      tooltips: {
        enabled: false,
      },
    };
  }
}
