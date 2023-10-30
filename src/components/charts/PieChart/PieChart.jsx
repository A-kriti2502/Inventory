import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import './PieChart.scss';

const data = [
    { name: "Sale", value: 700, color: "#0088FE" },
    { name: "Restock", value: 100, color: "#00C49F" },
    { name: "Defective", value: 50, color: "#FFBB28" },
    { name: "Exchage", value: 400, color: "#FF8042" },
  ];

const TotalUsers = () => {
  return (
     <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TotalUsers
