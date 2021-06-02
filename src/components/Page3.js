import React from 'react';
import logo from '../logo.svg';

const Page3 = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to Page3</h1>
    </header>
    <button onClick={() => console.log('clicked')}>Page1</button>
    <button onClick={() => console.log('clicked')}>Page2</button>
  </div>
);
export default Page3;
