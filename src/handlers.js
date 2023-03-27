import state from './state';

/**
 * @description updates the a11y screen reader element with labelled active points
 * @param {object} chart
 */
export const updateA11yLabel = (chart) => {
  const {datasetIndex, index} = state.get();
  const legendLabel = chart.config.data.datasets[datasetIndex].label;
  const currentLabel = chart.config.data.labels[index];
  const currentValue = chart.config.data.datasets[datasetIndex].data[index];

  document.getElementById(
    'chartjs-a11y-label'
  ).textContent = `${currentLabel}, ${legendLabel},  ${currentValue}`;
};

/**
 * @param {object} chart
 * @param {number} datasetIndex
 * @param {number} index
 */
export const updateActivePoint = (chart, datasetIndex, index) => {
  chart.setActiveElements([{datasetIndex, index}]);
  chart.tooltip.setActiveElements([{datasetIndex, index}]);
  state.set({datasetIndex, index});
};

/**
 * @description updates state with current activePoint, or set default state if no activePoint exists
 * @param {object} activePoint
 */
export const handleActivePoint = (activePoint) => {
  if (activePoint && !state.get()) {
    state.set(activePoint);
  } else if (activePoint && !state.compare(activePoint)) {
    state.set(activePoint);
  }
};

/**
 * @param {object} chart
 * @param {number} datasetIndex to start from
 * @returns {number} next visible datasetIndex
 */
export const findNextVisibleDataset = (chart, datasetIndex) => {
  if (datasetIndex === chart.config.data.datasets.length - 1) {
    datasetIndex = 0;
  } else {
    datasetIndex += 1;
  }

  if (chart.isDatasetVisible(datasetIndex)) {
    return datasetIndex;
  }

  return findNextVisibleDataset(chart, datasetIndex);
};

/**
 * @param {object} chart
 * @param {number} datasetIndex to start from
 * @returns {number} prev visible datasetIndex
 */
export const findPrevVisibleDataset = (chart, datasetIndex) => {
  if (datasetIndex === 0) {
    datasetIndex = chart.config.data.datasets.length - 1;
  } else {
    datasetIndex -= 1;
  }

  if (chart.isDatasetVisible(datasetIndex)) {
    return datasetIndex;
  }

  return findPrevVisibleDataset(chart, datasetIndex);
};

/**
 * @param {object} chart
 * @param {number} datasetIndex
 * @param {number} index
 * @param {number} currentDataset
 * @param {number} datasetLength
 */
export const handleRightKey = (
  chart,
  datasetIndex,
  index,
  currentDataset,
  datasetLength
) => {
  if (!chart.isDatasetVisible(datasetIndex)) {
    const newDatasetIndex = findNextVisibleDataset(chart, datasetIndex, index);

    updateActivePoint(chart, newDatasetIndex, 0);
  } else if (
    index === currentDataset.data.length - 1 &&
    datasetIndex === datasetLength - 1
  ) {
    updateActivePoint(chart, 0, 0);
  } else if (
    index === currentDataset.data.length - 1 &&
    !chart.isDatasetVisible(datasetIndex + 1)
  ) {
    const newDatasetIndex = findNextVisibleDataset(chart, datasetIndex, index);

    updateActivePoint(chart, newDatasetIndex, 0);
  } else if (index < currentDataset.data.length - 1) {
    updateActivePoint(chart, datasetIndex, index + 1);
  } else if (datasetLength > 1 && datasetIndex < datasetLength - 1) {
    updateActivePoint(chart, datasetIndex + 1, 0);
  } else {
    updateActivePoint(chart, datasetIndex, 0);
  }
};

/**
 * @param {object} chart
 * @param {number} datasetIndex
 * @param {number} index
 * @param {object} currentDataset
 * @param {number} datasetLength
 */
export const handleLeftKey = (
  chart,
  datasetIndex,
  index,
  currentDataset,
  datasetLength
) => {
  if (!chart.isDatasetVisible(datasetIndex)) {
    const newDatasetIndex = findPrevVisibleDataset(chart, datasetIndex);
    const newDataset = chart.config.data.datasets[newDatasetIndex];

    updateActivePoint(chart, newDatasetIndex, newDataset.data.length - 1);
  } else if (index === 0 && datasetIndex === 0) {
    updateActivePoint(chart, datasetLength - 1, currentDataset.data.length - 1);
  } else if (index === 0 && !chart.isDatasetVisible(datasetIndex - 1)) {
    const newDatasetIndex = findPrevVisibleDataset(chart, datasetIndex);
    const newDataset = chart.config.data.datasets[newDatasetIndex];

    updateActivePoint(chart, newDatasetIndex, newDataset.data.length - 1);
  } else if (index > 0) {
    updateActivePoint(chart, datasetIndex, index - 1);
  } else if (datasetLength > 1 && datasetIndex > 0) {
    const newDataset = chart.config.data.datasets[datasetIndex - 1];

    updateActivePoint(chart, datasetIndex - 1, newDataset.data.length - 1);
  } else {
    updateActivePoint(chart, datasetIndex, currentDataset.data.length - 1);
  }
};

/**
 * @param {object} chart
 * @param {number} datasetIndex
 * @param {number} index
 */
export const handleUpKey = (chart, datasetIndex, index) => {
  const newDatasetIndex = findPrevVisibleDataset(chart, datasetIndex);

  updateActivePoint(chart, newDatasetIndex, index);
};

/**
 * @param {object} chart
 * @param {number} datasetIndex
 * @param {number} index
 */
export const handleDownKey = (chart, datasetIndex, index) => {
  const newDatasetIndex = findNextVisibleDataset(chart, datasetIndex);

  updateActivePoint(chart, newDatasetIndex, index);
};
