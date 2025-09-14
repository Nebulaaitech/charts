
# @nebulaai/charts

Comprehensive charting library with real-time updates and interactive visualizations for NebulaAI applications.

## Installation

```bash
npm install @nebulaai/charts
```

## Quick Start

```tsx
import { LineChart, generateRandomData } from '@nebulaai/charts';

const data = generateRandomData(10);
const series = [{ name: 'Sample Data', data }];

function App() {
  return (
    <LineChart 
      series={series}
      width={800}
      height={400}
      theme="light"
    />
  );
}
```

## Features

- 📊 Multiple chart types (Line, Bar, Area, Scatter)
- 🔄 Real-time data updates
- 🎨 Light/Dark themes
- 📱 Responsive design
- ⚡ High performance canvas rendering
- 🎯 Interactive data points
- 📈 Time series support

## Chart Types

- `LineChart` - Line charts with smooth curves
- `BarChart` - Vertical/horizontal bar charts
- `AreaChart` - Filled area charts
- `ScatterChart` - Scatter plots
- `RealTimeChart` - Live updating charts

## License

MIT
