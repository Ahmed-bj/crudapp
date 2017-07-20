import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import App from './App';
//import logo from './logo.svg';
import registerServiceWorker from './registerServiceWorker';

var Application = App;

ReactDOM.render(<Application />, document.getElementById('root'));

registerServiceWorker();
