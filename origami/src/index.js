import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navigation from './navigation';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <Navigation />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
