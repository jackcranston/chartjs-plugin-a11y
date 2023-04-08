import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/chartjs-plugin-a11y.min.js',
    name: 'ChartjsPluginA11y',
    format: 'umd',
  },
  plugins: [terser()],
};
