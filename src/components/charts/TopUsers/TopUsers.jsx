import React from 'react';
import {topDealUsers} from '../../../data';
import './TopUsera.scss';

const TopUsers = () => {
  return (
    <div className="topBox">
      <h1>Top Users</h1>
      <div className="list">
        {topDealUsers.map(user => (
            <div className="listitem" key={user.id}>
                <div className="user">
                    <div className="img"></div>
                    <div className="userTexts">
                        <span className="username">{user.username}</span>
                        <span className="email">{user.email}</span>
                    </div>
                </div>
                <span className="amount">{user.amount}</span>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TopUsers
