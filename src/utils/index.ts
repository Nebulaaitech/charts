
export const generateRandomData = (points: number): import('../types').ChartDataPoint[] => {
  return Array.from({ length: points }, (_, i) => ({
    x: i,
    y: Math.random() * 100 + Math.sin(i * 0.1) * 20,
    label: `Point ${i}`
  }));
};

export const generateTimeSeriesData = (hours: number): import('../types').ChartDataPoint[] => {
  const now = new Date();
  return Array.from({ length: hours }, (_, i) => ({
    x: new Date(now.getTime() - (hours - i) * 3600000),
    y: Math.random() * 100 + 50,
    label: `Hour ${i}`
  }));
};

export const formatValue = (value: number, decimals = 2): string => {
  return Number(value).toFixed(decimals);
};

export const getColorPalette = (index: number): string => {
  const colors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
    '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'
  ];
  return colors[index % colors.length];
};

export const validateChartData = (series: import('../types').ChartSeries[]): boolean => {
  return series.every(s => 
    s.name && 
    Array.isArray(s.data) && 
    s.data.every(d => typeof d.y === 'number')
  );
};
