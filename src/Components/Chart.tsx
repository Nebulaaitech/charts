
import React from 'react';
import { ChartProps } from '../types';

const Chart: React.FC<ChartProps> = ({ 
  series, 
  width = 800, 
  height = 400, 
  theme = 'light',
  className,
  style,
  ...config 
}) => {
  return (
    <div 
      className={`nebulaai-chart ${className || ''}`}
      style={{ 
        width, 
        height, 
        backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
        ...style 
      }}
    >
      <canvas 
        width={width} 
        height={height}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Chart;
