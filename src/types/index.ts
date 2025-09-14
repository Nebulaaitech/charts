
export interface ChartDataPoint {
  x: number | string | Date;
  y: number;
  label?: string;
  color?: string;
  metadata?: Record<string, any>;
}

export interface ChartSeries {
  name: string;
  data: ChartDataPoint[];
  color?: string;
  type?: ChartType;
  yAxis?: 'left' | 'right';
}

export type ChartType = 'line' | 'bar' | 'area' | 'scatter' | 'pie' | 'doughnut';

export interface ChartConfig {
  width?: number;
  height?: number;
  theme?: 'light' | 'dark';
  animations?: boolean;
  responsive?: boolean;
  realTime?: boolean;
  updateInterval?: number;
  maxDataPoints?: number;
  grid?: boolean;
  legend?: boolean;
  tooltip?: boolean;
}

export interface ChartProps extends ChartConfig {
  series: ChartSeries[];
  onDataPointClick?: (point: ChartDataPoint, series: ChartSeries) => void;
  onDataUpdate?: (newData: ChartSeries[]) => void;
  className?: string;
  style?: React.CSSProperties;
}

export interface ChartEngine {
  render(): void;
  updateSeries(series: ChartSeries[]): void;
  addRealTimeData(seriesName: string, dataPoint: ChartDataPoint): void;
  destroy(): void;
}
