import {handleActivePoint, updateA11yLabel} from './handlers';
import {setup} from './setup';
import {onKeyDown, onFocus} from './listeners';

export default {
  id: 'chartjsPluginA11y',
  start: (chart, args, options) => {
    // add event listeners
    chart.canvas.addEventListener('focus', () => onFocus(chart));
    // setup required elements
    setup(chart, options);
  },
  beforeEvent: (chart, args, options) => {
    const {event} = args;

    if (event.type === 'keydown') {
      onKeyDown(event, chart);
    } else {
      // get the current active chart point
      const activePoint = chart.getElementsAtEventForMode(
        event,
        'index',
        {intersect: true},
        true
      )[0];

      handleActivePoint(activePoint);
    }
    updateA11yLabel(chart, options);
  },
};
