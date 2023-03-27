import ChartjsPluginA11y from '../src/index';

import {Chart, registerables} from 'chart.js';

Chart.register(ChartjsPluginA11y, ...registerables);

(() => {
  /* LINE CHART */
  const lineChartCanvas = document.createElement('canvas');
  document.getElementById('line').appendChild(lineChartCanvas);
  new Chart(lineChartCanvas, {
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
  }); // eslint-disable-line

  /* BAR CHART */
  const barChartCanvas = document.createElement('canvas');
  document.getElementById('bar').appendChild(barChartCanvas);
  new Chart(barChartCanvas, {
    type: 'bar',
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
  }); // eslint-disable-line

  /* RADAR CHART */
  const radarChartCanvas = document.createElement('canvas');
  document.getElementById('radar').appendChild(radarChartCanvas);
  new Chart(radarChartCanvas, {
    type: 'radar',
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
  }); // eslint-disable-line

  /* PIE CHART */
  const pieChartCanvas = document.createElement('canvas');
  document.getElementById('pie').appendChild(pieChartCanvas);
  new Chart(pieChartCanvas, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    },
    events: ['keydown', 'mousemove', 'mouseenter', 'mouseout', 'click'],
    plugins: {chartjsPluginA11y: {}},
  }); // eslint-disable-line

  /* DOUGHNUT CHART */
  const doughnutChartCanvas = document.createElement('canvas');
  document.getElementById('doughnut').appendChild(doughnutChartCanvas);
  new Chart(doughnutChartCanvas, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    },
    events: ['keydown', 'mousemove', 'mouseenter', 'mouseout', 'click'],
    plugins: {chartjsPluginA11y: {}},
  }); // eslint-disable-line

  /* POLAR AREA CHART */
  const polarAreaChartCanvas = document.createElement('canvas');
  document.getElementById('polar').appendChild(polarAreaChartCanvas);
  new Chart(polarAreaChartCanvas, {
    type: 'polarArea',
    data: {
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
          ],
        },
      ],
    },
    options: {
      events: ['keydown', 'mousemove', 'mouseenter', 'mouseout', 'click'],
      plugins: {chartjsPluginA11y: {}},
    },
  }); // eslint-disable-line

  /* BUBBLE CHART */
  const bubbleChartCanvas = document.createElement('canvas');
  document.getElementById('bubble').appendChild(bubbleChartCanvas);
  new Chart(bubbleChartCanvas, {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: 'First Dataset',
          data: [
            {
              x: 20,
              y: 30,
              r: 15,
            },
            {
              x: 40,
              y: 10,
              r: 10,
            },
            {
              x: 32,
              y: 12,
              r: 30,
            },
          ],
          backgroundColor: [
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
          ],
        },
      ],
    },
    options: {
      events: ['keydown', 'mousemove', 'mouseenter', 'mouseout', 'click'],
      plugins: {chartjsPluginA11y: {}},
    },
  }); // eslint-disable-line

  /* SCATTER CHART */
  const scatterChartCanvas = document.createElement('canvas');
  document.getElementById('scatter').appendChild(scatterChartCanvas);
  new Chart(scatterChartCanvas, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Scatter Dataset',
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
            {
              x: 0.5,
              y: 5.5,
            },
          ],
          backgroundColor: 'rgb(255, 99, 132)',
        },
      ],
    },
    options: {
      events: ['keydown', 'mousemove', 'mouseenter', 'mouseout', 'click'],
      plugins: {chartjsPluginA11y: {}},
    },
  }); // eslint-disable-line
})();
