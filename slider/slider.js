import React from 'react';
import ReactDOM from 'react-dom';
import MySlider from './main.jsx'
 


ReactDOM.render(
  <div
    style={{
        width: '400px',
        margin: 'auto',
        marginTop: '40px'
    }}
  >
    <MySlider />
  </div>,
  document.getElementById("demo")
);