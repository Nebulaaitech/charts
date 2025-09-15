export * from './components/LineChart';
export * from './components/BarChart';
export * from './components/AreaChart';
export * from './components/ScatterChart';
export * from './components/RealTimeChart';
export * from './types';
export * from './utils';

// Main chart components
export { default as Chart } from './components/Chart';
export { default as ChartContainer } from './components/ChartContainer';

// Utility functions
export { generateRandomData, generateTimeSeriesData } from './utils/dataGenerator';
export { ChartBuilder } from './utils/ChartBuilder';

// Types
export type {
  ChartDataPoint,
  ChartSeries,
  ChartConfig,
  ChartProps,
  ChartType
} from './types';

// Default export
export default {
  Chart,
  ChartContainer,
  LineChart: require('./components/LineChart').default,
  BarChart: require('./components/BarChart').default,
  AreaChart: require('./components/AreaChart').default,
  ScatterChart: require('./components/ScatterChart').default,
  RealTimeChart: require('./components/RealTimeChart').default,
  generateRandomData,
  generateTimeSeriesData,
  ChartBuilder
};