import state from './state';
import {updateActivePoint} from './handlers';
import {
  handleLeftKey,
  handleRightKey,
  handleUpKey,
  handleDownKey,
} from './handlers';

/**
 * @description sets active point when chart receives focus
 * @param {Object} chart
 */
export const onFocus = (chart) => {
  if (!state.get()) {
    const datasetIndex = 0;
    const index = 0;

    state.set({datasetIndex, index});
    updateActivePoint(chart, datasetIndex, index);
  }
};

/**
 * @description controls key up events
 * @param {KeyboardEvent} event keyup
 * @param {Object} chart
 */
export const onKeyDown = (event, chart) => {
  const {key} = event.native;
  const {datasetIndex, index} = state.get();
  const currentDataset = chart.config._config.data.datasets[datasetIndex];
  const datasetLength = chart.config._config.data.datasets.length;

  if (key === 'ArrowRight') {
    handleRightKey(chart, datasetIndex, index, currentDataset, datasetLength);
  } else if (key === 'ArrowLeft') {
    handleLeftKey(chart, datasetIndex, index, currentDataset, datasetLength);
  } else if (key === 'ArrowUp') {
    handleUpKey(chart, datasetIndex, index, currentDataset, datasetLength);
  } else if (key === 'ArrowDown') {
    handleDownKey(chart, datasetIndex, index, currentDataset, datasetLength);
  }
};
