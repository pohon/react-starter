import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import './styles/styles.scss';

//Hydrate ini API baru di React v16
const jsx = ( 
  <BrowserRouter>
    <App/>
  </BrowserRouter> );

//Kalo mau liat page hasil SSR, sebelum client app di-mount,
//pake delay ky gini:
/**
setTimeout(() => {
  ReactDOM.hydrate( <App initialName="Browser rendered"/>, document.getElementById('app') );
}, 2000);  
*/

ReactDOM.render(jsx, document.getElementById('app'));