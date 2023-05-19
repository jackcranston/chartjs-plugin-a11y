const outputDefaults = {
  name: 'ChartjsPluginA11y',
  indent: false,
  sourcemap: true,
};

export default {
  input: 'src/index.js',
  output: [
    {
      ...outputDefaults,
      file: 'dist/chartjs-plugin-a11y.umd.js',
      format: 'umd',
    },
    {
      ...outputDefaults,
      file: 'dist/chartjs-plugin-a11y.js',
      format: 'esm',
    },
    {
      ...outputDefaults,
      file: 'dist/chartjs-plugin-a11y.cjs',
      format: 'cjs',
    },
  ],
};
