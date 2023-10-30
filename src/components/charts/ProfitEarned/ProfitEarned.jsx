import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import {barChartBoxRevenue} from "../../../data" ;
import './ProfitEarned.scss';

const ProfitEarned = () => {
  return (
    <div className="barChartBox">
      <h1>{barChartBoxRevenue.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={barChartBoxRevenue.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <XAxis dataKey="name"/>
            <Bar dataKey={barChartBoxRevenue.dataKey} fill={barChartBoxRevenue.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProfitEarned
