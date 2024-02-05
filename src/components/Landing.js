import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Landing = () => {
  const users = [
    { name: 'Ameer', backgroundColor: 'red' },
    { name: 'Ayman', backgroundColor: 'blue' },
  ];

  const [usersData] = useState(users);

  return (
    <div>
    <h5>Welcome To Reflex</h5>
      <h3>The Home of Movie</h3>
      
      
      {usersData.map((user, index) => (
        <Link to="/catalog" key={index}>
          <div className="user-box">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>  
            <h2>{user.name}</h2>
            
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Landing;
