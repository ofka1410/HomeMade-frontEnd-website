import React,{useState,useEffect} from 'react'
import { Line } from "react-chartjs-2";




export default function Chart_big({bigChart_data}) {
  
    const [size,setSize]=useState(850)
    const data = {
 
      labels:["January","Febuary",'March',"April","May",
      "June","July","August","September",
      "October","November","December"],
      datasets: [
        {
          label: '₪ רווח:',
          data:bigChart_data,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };
    
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    
    
    return (
      <>
   
    <Line data={data} options={options} />
  </>
    )
    }