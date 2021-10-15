import React from 'react';
import Paper from '@material-ui/core/Paper';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function LineC() {
    const data = [
        {
          "name": "JAN",
          "portfolio2": 4000,
          "portfolio1": 2400,
          "amt": 2400
        },
        {
          "name": "FEB",
          "portfolio2": 3000,
          "portfolio1": 1398,
          "amt": 2210
        },
        {
          "name": "MAR",
          "portfolio2": 2000,
          "portfolio1": 9800,
          "amt": 2290
        },
        {
          "name": "APR",
          "portfolio2": 2780,
          "portfolio1": 3908,
          "amt": 2000
        },
        {
          "name": "MAY",
          "portfolio2": 1890,
          "portfolio1": 4800,
          "amt": 2181
        },
        {
          "name": "JUNE",
          "portfolio2": 2390,
          "portfolio1": 3800,
          "amt": 2500
        },
        {
          "name": "JULY",
          "portfolio2": 3490,
          "portfolio1": 4300,
          "amt": 2100
        }
      ]
      
    return(
        <div className="linechart">
            <Paper elevation={20} >
            <LineChart width={1530} height={550} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="portfolio1" stroke="#8884d8" />
        <Line type="monotone" dataKey="portfolio2" stroke="#82ca9d" />
      </LineChart>
      </Paper>
        </div>
    )                              
      
}

export default LineC
