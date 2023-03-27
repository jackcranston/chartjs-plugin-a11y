export default {
  currentState: {
    datasetIndex: 0,
    index: 0,
  },

  get() {
    return this.currentState;
  },

  set(value) {
    this.currentState = value;
  },

  compare(newState) {
    const datasetIndexMatch =
      this.currentState.datasetIndex === newState.datasetIndex;
    const indexMatch = this.currentState.index === newState.index;

    return datasetIndexMatch && indexMatch;
  },
};
