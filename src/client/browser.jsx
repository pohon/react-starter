import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import './styles/styles.scss';

//Hydrate ini API baru di React v16
ReactDOM.hydrate( <App initialName="Browser rendered"/>, document.getElementById('app') );

//Kalo mau liat page hasil SSR, sebelum client app di-mount,
//pake delay ky gini:
/**
setTimeout(() => {
  ReactDOM.hydrate( <App initialName="Browser rendered"/>, document.getElementById('app') );
}, 2000);  
*/
