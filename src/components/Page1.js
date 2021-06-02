import React from 'react';
import logo from '../logo.svg';

const Page1 = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to Page1</h1>
    </header>
    <button onClick={() => console.log('clicked')}>Page2</button>
    <button onClick={() => console.log('clicked')}>Page3</button>
  </div>
);
export default Page1;
