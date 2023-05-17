import ChartjsPluginA11y from '../index';
import {Chart, registerables} from 'chart.js';

Chart.register(ChartjsPluginA11y, ...registerables);

describe('setup', () => {
  let canvasEl;
  let chart;

  beforeAll(() => {
    // setup DOM
    canvasEl = document.createElement('canvas');
    document.body.appendChild(canvasEl);

    // instantiate chart
    chart = new Chart(canvasEl, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: [0, 10, 5, 2, 20, 30],
            hoverBorderWidth: 2,
            hoverBorderColor: 'black',
            pointHoverRadius: 10,
          },
          {
            label: 'My second dataset',
            backgroundColor: 'red',
            borderColor: 'red',
            data: [24, 11, 54, 21, 28, 3],
            hoverBorderWidth: 2,
            hoverBorderColor: 'black',
            pointHoverRadius: 10,
          },
          {
            label: 'My third dataset',
            backgroundColor: 'green',
            borderColor: 'green',
            data: [34, 12, 23, 1, 45, 2],
            hoverBorderWidth: 2,
            hoverBorderColor: 'black',
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        events: ['keydown', 'mousemove', 'mouseenter', 'mouseout', 'click'],
        plugins: {chartjsPluginA11y: {}},
      },
    });
  });

  it('sets up DOM elements correctly on first load', () => {
    const a11yEl = document.getElementById('chartjs-a11y-label');

    expect(canvasEl.getAttribute('role')).toBe('image');
    expect(canvasEl.getAttribute('tabindex')).toBe('0');
    expect(canvasEl.getAttribute('aria-label')).toBe('line chart');
    expect(canvasEl.getAttribute('aria-describedby')).toBe(
      'chartjs-a11y-label'
    );

    expect(a11yEl.getAttribute('tabindex')).toBe('-1');
    expect(a11yEl.getAttribute('role')).toBe('status');
    expect(a11yEl.style.cssText).toBe(
      'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;'
    );
  });
});
