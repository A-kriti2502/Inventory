import React from 'react';
import './TotalProducts.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import {chartBoxProduct} from '../../../data';

const TotalProducts = () => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
            <img src={chartBoxProduct.icon} alt="" />
            <span>{chartBoxProduct.title}</span>
        </div>
        <h1>{chartBoxProduct.number}</h1>
        <div>
          
        </div>
      </div>
      <div className="chartInfo">
        <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <LineChart data={chartBoxProduct.chartData}>
                    <Tooltip 
                    contentStyle={{background:"transparent", border:"none"}}
                    labelStyle={{display:"none"}}
                    position={{x:10, y:60}}
                    />

                    <Line 
                    type="monotone" 
                    dataKey={chartBoxProduct.dataKey}
                    stroke={chartBoxProduct.color}
                    strokeWidth={2} 
                    dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="texts">
            <span 
            className="percentage"
            style={{color: chartBoxProduct.percentage <0 ? "tomato":"limegreen"}}>
              {chartBoxProduct.percentage}
            </span>
            <span className="duration">This month</span>
        </div>
      </div>
    </div>
  )
}

export default TotalProducts
