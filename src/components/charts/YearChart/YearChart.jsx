import React from 'react';
import './YearChart.scss';
import { Bar, BarChart, ResponsiveContainer, Tooltip,XAxis, YAxis,Legend, CartesianGrid } from "recharts";
import {barChartYearRevenue} from "../../../data" ;

const YearChart = () => {
  return (
    <div className="barChartBox">
      <h1>{barChartYearRevenue.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={barChartYearRevenue.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis/>
            {/* {barChartYearRevenue.chartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
                
                <Bar dataKey={barChartYearRevenue.dataKey} fill={barChartYearRevenue.chartData.color} />
            ))} */}
            <Bar dataKey={barChartYearRevenue.dataKey} fill={barChartYearRevenue.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default YearChart
