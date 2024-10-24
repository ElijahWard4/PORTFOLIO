// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './global.css';

// const globalStyles = `
//   html, body, #root {
//     height: 100%;
//     margin: 0;
//     padding: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   * {
//     box-sizing: border-box;
//   }

//   .box-centered {
//     display: flex !important;
//     justify-content: center !important;
//     align-items: center !important;
//     height: 100vh !important;
//     margin: 0 auto !important;
//     position: relative !important;
//     z-index: 10 !important;
//   }
// `;

// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = globalStyles;
// document.head.appendChild(styleSheet);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );