import React from 'react'
// import { PieChart } from 'react-minimal-pie-chart';
import { Doughnut } from 'react-chartjs-2';

export default function Pie_chart({number_orders_month,number_orders}) {

  const data = {
    labels: ['כמו הזמנות חודשית', 'כמות הזמנות כללית'],
    datasets: [
      {
        label: '# of Votes',
        data: [number_orders_month,number_orders],
        backgroundColor: [
          'rgba(236, 66, 35, 0.2)',
          'rgba(54, 162, 235, 0.2)',
         
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  
 
    return (
        <div className='small_chart'>
  
  <Doughnut   data={data}/>
        </div>
    )
}

