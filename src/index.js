import React from 'react';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
  // root.render(
  //   <StrictMode>
  //     <BrowserRouter basename="/goit-react-hw-05-movies">
  //       <App />
  //     </BrowserRouter>
  //   </StrictMode>
);
