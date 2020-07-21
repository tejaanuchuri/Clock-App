import React from 'react';
import './App.css';

function Clock(props) {
  return (
    <div>
      <h1>Hello world...!</h1>
      <h2>The time is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}


export default Clock;
