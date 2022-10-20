import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './scss/index.scss'
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );