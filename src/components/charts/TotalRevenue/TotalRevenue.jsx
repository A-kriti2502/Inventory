import React from 'react';
import './TotalRevenue.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import {chartBoxRevenue} from '../../../data';

const TotalRevenue = () => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
            <img src={chartBoxRevenue.icon} alt="" />
            <span>{chartBoxRevenue.title}</span>
        </div>
        <h1>{chartBoxRevenue.number}</h1>
        <div>
          lakhs
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <LineChart data={chartBoxRevenue.chartData}>
                    <Tooltip 
                    contentStyle={{background:"transparent", border:"none"}}
                    labelStyle={{display:"none"}}
                    position={{x:10, y:60}}
                    />

                    <Line 
                    type="monotone" 
                    dataKey={chartBoxRevenue.dataKey}
                    stroke={chartBoxRevenue.color}
                    strokeWidth={2} 
                    dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="texts">
            <span 
            className="percentage"
            style={{color: chartBoxRevenue.percentage <0 ? "tomato":"limegreen"}}>
              {chartBoxRevenue.percentage}
            </span>
            <span className="duration">This month</span>
        </div>
      </div>
    </div>
  )
}

export default TotalRevenue
