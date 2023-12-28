import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { convertNumber } from '../../../functions/convertNumbers';


function LineChart({ chartData, mutliAxis, priceType }) {
  const options = {
    plugins: {
      legend: {
        display: mutliAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
       
        ticks:
          priceType == "market_caps"
            ? {
                callback: function (value) {
                  return "$" + convertNumber(value);
                },
              }
            : priceType == "total_volumes"
            ? {
                callback: function (value) {
                  return convertNumber(value);
                },
              }
            : {
                callback: function (value, index, ticks) {
                  return "$" + value.toLocaleString();
                },
              },
      },
      y1: mutliAxis
        ? {
            type: "linear",
            display: true,
            position: "left",
            ticks:
              priceType == "market_caps"
                ? {
                    callback: function (value) {
                      return "$" + convertNumber(value);
                    },
                  }
                : priceType == "total_volumes"
                ? {
                    callback: function (value) {
                      return convertNumber(value);
                    },
                  }
                : {
                    callback: function (value, index, ticks) {
                      return "$" + value.toLocaleString();
                    },
                  },
          }
        : { display: false },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;