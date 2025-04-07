import React from 'react';
import {
  Line,
  Bar
} from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ForecastLineChart = () => {
  const data = {
    labels: ['2024', '2025', '2026', '2027', '2028'],
    datasets: [
      {
        label: 'Projected Home Price ($)',
        data: [350000, 365000, 380000, 395000, 410000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export const ForecastBarChart = () => {
  const data = {
    labels: ['2024', '2025', '2026', '2027', '2028'],
    datasets: [
      {
        label: 'Appreciation (%)',
        data: [4.2, 4.1, 3.9, 4.0, 3.8],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Bar data={data} options={options} />;
};
