import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto';  //don't get rid of it

const  LineChart = ({chartData,priceType,multiAxis}) => {
const options={
  plugins: {
    legend: {
        display:multiAxis ? true : false,
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },

}

  return (
   <Line data={chartData} options={options}/>
  )
}

export default  LineChart;