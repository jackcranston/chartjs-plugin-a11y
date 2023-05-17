/**
 * @description creates hidden text element for screen reader
 */
export const createA11yElement = () => {
  const a11yElement = document.createElement('div');
  a11yElement.setAttribute('id', 'chartjs-a11y-label');
  // remove from tab order as we only want user to access this via the chart element
  a11yElement.setAttribute('tabindex', '-1');
  a11yElement.setAttribute('role', 'status');
  a11yElement.style.cssText =
    'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
  document.body.appendChild(a11yElement);
};

/**
 * @description sets up plugin
 * @param {Object} chart
 * @param {Object} options
 */
export const setup = (chart, options) => {
  const {canvas} = chart;
  // application is a generic role for an interactive UI component
  canvas.setAttribute('role', 'image');
  // make canvas tabbable
  canvas.setAttribute('tabindex', '0');
  // set default AT label
  canvas.setAttribute(
    'aria-label',
    options.chartLabel || `${chart.config._config.type} chart`
  );
  canvas.setAttribute('aria-describedby', 'chartjs-a11y-label');

  canvas.addEventListener('keydown', (event) => {
    const {key} = event;

    if (
      key === 'ArrowLeft' ||
      key === 'ArrowRight' ||
      key === 'ArrowUp' ||
      key === 'ArrowDown'
    ) {
      event.preventDefault();
    }
  });

  if (!document.getElementById('chartjs-a11y-label')) {
    createA11yElement();
  }
};
