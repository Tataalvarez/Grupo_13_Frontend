import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Router from './routes/Router';

import './firebase'
import 'bootswatch/dist/lumen/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
