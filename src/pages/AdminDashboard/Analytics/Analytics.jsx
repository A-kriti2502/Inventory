import React from 'react';
import './Analytics.scss';
import TopUsers from '../../../components/charts/TopUsers/TopUsers';
import PieChart from '../../../components/charts/PieChart/PieChart';
import ProfitEarned from '../../../components/charts/ProfitEarned/ProfitEarned';
import TotalUsers from '../../../components/charts/TotalUsers/TotalUsers';
import TotalProducts from '../../../components/charts/TotalProducts/TotalProducts';
import TotalRevenue from '../../../components/charts/TotalRevenue/TotalRevenue';
import YearChart from '../../../components/charts/YearChart/YearChart';

const Analytics = () => {
  return (
    <div className='analytics'>
      <div className="box box1">
        <TopUsers/>
      </div>
      <div className="box box2">
        <TotalUsers/>
      </div>
      <div className="box box3">
        <PieChart/>
      </div>
      <div className="box box4">
      <TotalProducts/>
      </div>
      <div className="box box5">
        <TotalRevenue/>
      </div>
      <div className="box box6">
        <YearChart/>
      </div>
      <div className="box box7">
        <ProfitEarned/>
      </div>
    </div>
  )
}

export default Analytics
