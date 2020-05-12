import React from 'react';
import './App.css';
import UserBanner from './UserBanner/UserBanner';
import HowTo from './HowTo/HowTo';
import Timer from './Timer/Timer';

function App() {
  return (
    <div>
      <UserBanner/>
      <Timer/>
      <img src="https://source.unsplash.com/VSrHD079L78" alt="blue tunnel"/>
      <HowTo/>
    </div>
  );
}

export default App;
