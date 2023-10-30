import React from 'react';
import './TotalUsers.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import {chartBoxUser} from '../../../data';

const TotalUsers = () => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
            <img src={chartBoxUser.icon} alt="" />
            <span>{chartBoxUser.title}</span>
        </div>
        <h1>{chartBoxUser.number}</h1>
        <div>
          
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <LineChart data={chartBoxUser.chartData}>
                    <Tooltip 
                    contentStyle={{background:"transparent", border:"none"}}
                    labelStyle={{display:"none"}}
                    position={{x:10, y:60}}
                    />

                    <Line 
                    type="monotone" 
                    dataKey={chartBoxUser.dataKey}
                    stroke={chartBoxUser.color}
                    strokeWidth={2} 
                    dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="texts">
            <span 
            className="percentage"
            style={{color: chartBoxUser.percentage <0 ? "tomato":"limegreen"}}>
              {chartBoxUser.percentage}
            </span>
            <span className="duration">This month</span>
        </div>
      </div>
    </div>
  )
}

export default TotalUsers
